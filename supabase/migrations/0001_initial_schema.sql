-- AceGlobal initial schema
-- Run this against your Supabase project (SQL editor or `supabase db push`)

-- ============================================================================
-- profiles: one row per auth.users row, materialized from signup metadata
-- ============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  business_type text not null default 'other'
    check (business_type in ('trucker', 'farmer', 'other')),
  business_name text,
  annual_revenue_range text
    check (annual_revenue_range in ('0-100k', '100k-500k', '500k-1m', '1m+')),
  bookkeeping_needs text[] not null default '{}',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- mock_financial_metrics: seeded mock values for the dashboard widgets
-- ============================================================================
create table if not exists public.mock_financial_metrics (
  user_id uuid primary key references public.profiles(id) on delete cascade,

  -- trucking widgets
  ytd_miles integer not null default 12482,
  ytd_fuel_gallons integer not null default 1940,
  audit_score integer not null default 98,
  per_diem_ytd numeric not null default 18400,

  -- agriculture widgets
  ledger_accuracy integer not null default 99,
  expense_categorization integer not null default 88,
  avg_revenue numeric not null default 124000,
  operating_margin numeric not null default 14.8,

  updated_at timestamptz not null default now()
);

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.profiles enable row level security;
alter table public.mock_financial_metrics enable row level security;

drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update"
  on public.profiles for update
  using (auth.uid() = id);

drop policy if exists "metrics_self_select" on public.mock_financial_metrics;
create policy "metrics_self_select"
  on public.mock_financial_metrics for select
  using (auth.uid() = user_id);

-- ============================================================================
-- Trigger: when a new auth.users row is created, materialize a profile
-- and a mock_financial_metrics row from the signup metadata payload.
-- ============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  needs_json jsonb;
  needs_array text[];
begin
  needs_json := new.raw_user_meta_data -> 'bookkeeping_needs';

  if needs_json is null or jsonb_typeof(needs_json) <> 'array' then
    needs_array := '{}';
  else
    select coalesce(array_agg(value::text), '{}')
      into needs_array
      from jsonb_array_elements_text(needs_json);
  end if;

  insert into public.profiles (
    id, full_name, business_type, business_name,
    annual_revenue_range, bookkeeping_needs, onboarding_completed
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'business_type', 'other'),
    new.raw_user_meta_data ->> 'business_name',
    new.raw_user_meta_data ->> 'annual_revenue_range',
    needs_array,
    true
  )
  on conflict (id) do nothing;

  insert into public.mock_financial_metrics (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
