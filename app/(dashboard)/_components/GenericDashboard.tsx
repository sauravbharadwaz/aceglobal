import type { Profile } from "@/lib/types/database";
import Link from "next/link";

export function GenericDashboard({ profile }: { profile: Profile }) {
  return (
    <div className="p-8 md:p-12">
      <header className="mb-10">
        <div className="text-label-md text-on-surface-variant uppercase tracking-widest mb-2">AceGlobal Portal</div>
        <h1 className="text-headline-lg text-on-surface">Welcome, {profile.full_name.split(" ")[0] || "Client"}.</h1>
        <p className="text-body-md text-on-surface-variant mt-2">
          Your industry-specific bookkeeping dashboard is being configured.
        </p>
      </header>
      <div className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant shadow-sm">
        <h3 className="text-headline-md mb-4">Industry-specific widgets coming soon</h3>
        <p className="text-body-md text-on-surface-variant mb-6">
          Your business type is set to <strong>{profile.business_type}</strong>. Choose a specialized profile to unlock
          tailored bookkeeping widgets:
        </p>
        <div className="flex gap-4">
          <Link href="/trucking" className="px-6 py-3 rounded-lg bg-primary text-on-primary tactile-button">
            Explore Trucking
          </Link>
          <Link href="/agriculture" className="px-6 py-3 rounded-lg border border-outline-variant hover:bg-surface-container-low">
            Explore Agriculture
          </Link>
        </div>
      </div>
    </div>
  );
}
