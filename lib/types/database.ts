// Hand-maintained Supabase row types. After running the migration you can
// regenerate this with `supabase gen types typescript --project-id <id> > lib/types/database.ts`.

export type BusinessType = "trucker" | "farmer" | "other";
export type RevenueRange = "0-100k" | "100k-500k" | "500k-1m" | "1m+";

export interface Profile {
  id: string;
  full_name: string;
  business_type: BusinessType;
  business_name: string | null;
  annual_revenue_range: RevenueRange | null;
  bookkeeping_needs: string[];
  onboarding_completed: boolean;
  created_at: string;
}

export interface MockFinancialMetrics {
  user_id: string;
  ytd_miles: number;
  ytd_fuel_gallons: number;
  audit_score: number;
  per_diem_ytd: number;
  ledger_accuracy: number;
  expense_categorization: number;
  avg_revenue: number;
  operating_margin: number;
  updated_at: string;
}
