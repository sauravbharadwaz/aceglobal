import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { MockFinancialMetrics, Profile } from "@/lib/types/database";
import { TruckingDashboard } from "../_components/TruckingDashboard";
import { AgricultureDashboard } from "../_components/AgricultureDashboard";
import { GenericDashboard } from "../_components/GenericDashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: profile }, { data: metrics }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single<Profile>(),
    supabase.from("mock_financial_metrics").select("*").eq("user_id", user.id).single<MockFinancialMetrics>(),
  ]);

  if (!profile) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-headline-md mb-4">Setting up your profile...</h1>
        <p className="text-on-surface-variant">
          If this persists, the database trigger may not have run. Verify the migration was applied to your Supabase
          project.
        </p>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-headline-md mb-4">Financial data not yet seeded.</h1>
      </div>
    );
  }

  if (profile.business_type === "trucker") {
    return <TruckingDashboard profile={profile} metrics={metrics} />;
  }
  if (profile.business_type === "farmer") {
    return <AgricultureDashboard profile={profile} metrics={metrics} />;
  }
  return <GenericDashboard profile={profile} />;
}
