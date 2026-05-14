import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "./_components/Sidebar";
import type { Profile } from "@/lib/types/database";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  return (
    <div className="theme-auth bg-background min-h-screen flex">
      <Sidebar fullName={profile?.full_name ?? ""} email={user.email ?? ""} />
      <div className="flex-1 flex flex-col overflow-x-hidden">{children}</div>
    </div>
  );
}
