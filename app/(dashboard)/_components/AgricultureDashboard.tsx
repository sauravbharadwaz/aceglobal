import type { MockFinancialMetrics, Profile } from "@/lib/types/database";

export function AgricultureDashboard({
  profile,
  metrics,
}: {
  profile: Profile;
  metrics: MockFinancialMetrics;
}) {
  const avgRevenue = `$${(Number(metrics.avg_revenue) / 1000).toFixed(0)}k`;
  const margin = `${Number(metrics.operating_margin).toFixed(1)}%`;

  const QUARTERS = [
    { label: "Q1", h: "h-2/3", accent: true },
    { label: "Q2", h: "h-1/2", accent: true },
    { label: "Q3", h: "h-5/6", accent: true },
    { label: "PROJ", h: "h-1/4", accent: false },
  ];

  return (
    <div className="p-8 md:p-12">
      <header className="mb-10">
        <div className="text-label-md text-on-surface-variant uppercase tracking-widest mb-2">Yield Financials</div>
        <h1 className="text-headline-lg text-on-surface">Welcome back, {profile.full_name.split(" ")[0] || "Grower"}.</h1>
        <p className="text-body-md text-on-surface-variant mt-2">
          {profile.business_name ? `${profile.business_name} — ` : ""}Real-time soil health view of your financials.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Health metrics */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm">
          <h3 className="text-headline-md mb-6 text-primary">Real-Time Revenue Monitoring</h3>
          <div className="space-y-8">
            {[
              { val: `${metrics.ledger_accuracy}%`, label: "Ledger Accuracy", desc: "Automated bank reconciliation health", accent: true },
              { val: `${metrics.expense_categorization}%`, label: "Expense Categorization", desc: "Successfully tagged operational costs", accent: false },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-6">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center ${
                    m.accent ? "border-secondary bg-secondary/5" : "border-primary bg-surface-container"
                  }`}
                >
                  <span className={`text-headline-md ${m.accent ? "text-secondary" : "text-primary"}`}>{m.val}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{m.label}</h4>
                  <p className="text-on-surface-variant text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fiscal Health Gauge */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm recessed-input">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-headline-md text-primary">Fiscal Health Gauge</h4>
            <span className="material-symbols-outlined text-secondary">analytics</span>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {QUARTERS.map((b) => (
              <div key={b.label} className="flex-1 bg-surface-container-high rounded-t-xl relative">
                <div
                  className={`absolute bottom-0 left-0 w-full ${b.h} ${b.accent ? "bg-secondary" : "bg-primary"} rounded-t-xl`}
                />
                <span
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 text-label-md text-xs ${
                    b.accent ? "text-on-surface-variant" : "text-primary font-bold"
                  }`}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-outline-variant grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{avgRevenue}</div>
              <div className="text-xs text-label-md uppercase text-on-surface-variant">Avg. Revenue</div>
            </div>
            <div className="text-center border-l border-outline-variant">
              <div className="text-2xl font-bold text-primary">{margin}</div>
              <div className="text-xs text-label-md uppercase text-on-surface-variant">Operating Margin</div>
            </div>
          </div>
        </div>

        {/* Seasonal */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-10 shadow-sm border border-outline-variant header-cap-emerald">
          <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">calendar_month</span>
          <h3 className="text-headline-md mb-4 text-primary">Seasonal Cash Flow Management</h3>
          <p className="text-on-surface-variant text-body-md max-w-lg mb-8">
            Your ledger is aligned with planting, harvest, and storage cycles to ensure liquidity when you need it most.
          </p>
          <div className="recessed-input bg-surface-container p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-label-md uppercase text-primary">Yield Correlation Tracker</span>
              <span className="text-label-md text-secondary">+12% Efficiency</span>
            </div>
            <div className="w-full bg-surface-container-highest h-4 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-3/4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
