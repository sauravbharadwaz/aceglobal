import type { MockFinancialMetrics, Profile } from "@/lib/types/database";

export function TruckingDashboard({
  profile,
  metrics,
}: {
  profile: Profile;
  metrics: MockFinancialMetrics;
}) {
  const miles = Number(metrics.ytd_miles).toLocaleString();
  const gallons = Number(metrics.ytd_fuel_gallons).toLocaleString();
  const perDiem = Number(metrics.per_diem_ytd).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="p-8 md:p-12">
      <header className="mb-10">
        <div className="text-label-md text-on-surface-variant uppercase tracking-widest mb-2">Logistics Command Center</div>
        <h1 className="text-headline-lg text-on-surface">Welcome back, {profile.full_name.split(" ")[0] || "Operator"}.</h1>
        <p className="text-body-md text-on-surface-variant mt-2">
          {profile.business_name ? `${profile.business_name} — ` : ""}Real-time ledger snapshot for your fleet.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* IFTA */}
        <div className="md:col-span-7 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-2 block">distance</span>
              <h3 className="text-headline-md">IFTA Record Engine</h3>
            </div>
            <div className="bg-secondary-container px-3 py-1 rounded-lg">
              <span className="text-on-secondary-container text-label-md">LIVE TRACKING</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Miles", value: miles },
              { label: "Fuel (Gal)", value: gallons },
              { label: "Audit Score", value: `${metrics.audit_score}%`, accent: true },
            ].map((s) => (
              <div key={s.label} className="bg-surface-container rounded-lg p-4 recessed-input text-center">
                <div className="text-on-surface-variant text-label-md uppercase mb-1">{s.label}</div>
                <div className={`text-headline-md ${s.accent ? "text-secondary" : "text-primary"}`}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="h-2 bg-surface-container rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full"
              style={{ width: `${Math.min(metrics.audit_score, 100)}%` }}
            />
          </div>
          <p className="mt-4 text-body-md text-on-surface-variant">
            Automated mileage recording across 48 states with instant receipt OCR.
          </p>
        </div>

        {/* Per-Diem */}
        <div className="md:col-span-5 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-secondary">savings</span>
            </div>
            <h3 className="text-headline-md mb-2">Per-Diem Tracker</h3>
            <p className="text-body-md text-on-surface-variant">
              Intelligent tracking of overnight stays to maintain accurate records of your non-taxable allowances.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-label-md text-on-surface-variant">YTD Records</span>
              <span className="text-headline-md text-secondary">${perDiem}</span>
            </div>
            <div className="bg-surface-container p-4 rounded-xl border-l-4 border-secondary">
              <span className="text-label-md text-secondary block mb-1">PRO TIP</span>
              <p className="text-xs italic text-on-surface-variant">
                You have 12 untracked days in the current quarter to reconcile.
              </p>
            </div>
          </div>
        </div>

        {/* Owner-Operator */}
        <div className="md:col-span-5 bg-primary p-6 rounded-xl shadow-lg text-on-primary">
          <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 block">account_balance_wallet</span>
          <h3 className="text-headline-md mb-4 text-white">Owner-Operator Suite</h3>
          <ul className="space-y-4">
            {["Quarterly Financial Reporting", "Load-by-Load Profitability", "Audit-Ready Statements"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-sm">check_circle</span>
                <span className="text-body-md">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fleet Analytics */}
        <div className="md:col-span-7 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-headline-md">Fleet Performance</h3>
            <span className="material-symbols-outlined text-secondary">analytics</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-label-md text-on-surface-variant mb-1">MPG (Fleet Avg)</div>
              <div className="text-headline-lg text-primary">
                {(metrics.ytd_miles / metrics.ytd_fuel_gallons).toFixed(1)}
              </div>
              <div className="text-xs text-secondary">Above target</div>
            </div>
            <div>
              <div className="text-label-md text-on-surface-variant mb-1">Cost / Mile</div>
              <div className="text-headline-lg text-primary">$1.84</div>
              <div className="text-xs text-on-surface-variant">12-month trailing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
