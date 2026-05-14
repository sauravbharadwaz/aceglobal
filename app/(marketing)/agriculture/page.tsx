import Link from "next/link";
import { LightNav } from "../_components/LightNav";
import { Footer } from "../_components/Footer";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuArFb9xHuwjGAOgGPzBFGrODkbeNJdz_zdXOI3MmiVZOi2rToLX-0sV5AFSMNEThLArZvkCptXi_YVRQBN3tbRcRWi-lXedAZ1AoiytwMAAkRo-t92dpBRe585fKaXBc4iCP63hSogwA4Ji2NNzITLZ-4FWhmr-VzMAJLijBgBTCXXF43JpnZilHJ80bGhDRpr4mFsHuyM0fWb8plvIndq6xeqRCa7rrHtJQy5_nBDLocvPRu43SBGtgo2D8XB_oedufxn-sHiSUrU";
const RESOURCE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBC25qrI3h-_CCTdd2RSMoNL85ayl0QzBiiEa5JpPHT4xJE_IZTUCNYHlgVXRg2s3RwEP6ix6oD6el6aA_tzgL3AbigHw_inuj3E0c6BmOJtt8wrs-Aa742IQH90ZTEoooIWjPDCpMQ3BsjMxO14sQcLW0JnE0-tOEzRAJyCwthwB5ibz-jTdb2IlTCqfDWKUUZP6opIDGQgZoDI3gfDUFGG_3jFdvlFOL2Tt4nz6_1oCElvipORYWvYODtT9PEJuTH2MLmpi40VLY";

export default function AgriculturePage() {
  return (
    <div className="theme-agriculture bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <LightNav active="agriculture" />

      <main className="pt-32 pb-24 flex-grow">
        {/* Hero */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-label-md rounded mb-6 uppercase tracking-widest">
                Agricultural Excellence
              </span>
              <h1 className="text-display-lg text-primary mb-8 leading-tight">Harvest Maximum Returns with Precision Bookkeeping</h1>
              <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Tailored financial tracking and asset management for the modern grower. From equipment depreciation to yield-based ledgering, we
                ensure your farm&apos;s legacy is as robust as your yield.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#features" className="px-8 py-4 rounded-xl text-headline-md bg-secondary text-on-secondary tactile-button hover:opacity-90 transition-all">
                  Explore Our Services
                </a>
                <Link href="/get-started" className="px-8 py-4 rounded-xl text-headline-md border-2 border-primary text-primary hover:bg-surface-container-low transition-all">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Wheat field at golden hour" className="w-full h-[500px] object-cover" src={HERO_IMG} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-outline-variant glass-card-light max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    eco
                  </span>
                  <span className="text-label-md text-on-surface-variant">OPERATIONAL EFFICIENCY</span>
                </div>
                <div className="text-headline-md text-primary">22% Lift</div>
                <div className="text-on-surface-variant text-sm mt-1">Average profit margin increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento */}
        <section id="features" className="max-w-max-width mx-auto px-margin-desktop mb-24">
          <h2 className="text-headline-lg text-center mb-16">Precision Tools for the Modern Grower</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-2xl p-10 shadow-sm border border-outline-variant header-cap-emerald flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">calendar_month</span>
                <h3 className="text-headline-md mb-4 text-primary">Seasonal Cash Flow Management</h3>
                <p className="text-on-surface-variant text-body-md max-w-lg mb-8">
                  Farming isn&apos;t a 9-to-5, and neither is your cash flow. We align your ledger with planting, harvest, and storage cycles to
                  ensure liquidity when you need it most.
                </p>
              </div>
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

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-outline-variant header-cap-black">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">agriculture</span>
              <h3 className="text-headline-md mb-4 text-primary">Asset Tracking</h3>
              <p className="text-on-surface-variant text-body-md mb-8">
                Detailed depreciation and maintenance logs for tractors, combines, and irrigation systems.
              </p>
              <div className="space-y-4">
                {["Real-time Valuation", "Lifecycle Reporting"].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-outline-variant">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-on-primary rounded-2xl p-10 shadow-xl">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6 block">payments</span>
              <h3 className="text-headline-md mb-4">Smart Categorization</h3>
              <p className="text-white/70 text-body-md mb-8">
                Automated expense sorting for seed, fertilizer, and fuel costs to pinpoint operational waste.
              </p>
              <Link href="/get-started" className="text-secondary-container font-semibold flex items-center gap-2 hover:underline">
                Audit Your Expenses
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="md:col-span-2 bg-surface-container-high rounded-2xl overflow-hidden shadow-sm border border-outline-variant flex flex-col md:flex-row">
              <div className="p-10 flex-1">
                <h3 className="text-headline-md mb-4 text-primary">Industry Insights</h3>
                <p className="text-on-surface-variant text-body-md mb-6">
                  Optimize your 2024 growing season with our latest guide on Ag-Specific Bookkeeping. Download our Farm Strategy Whitepaper.
                </p>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-lg text-label-md tactile-button">Download Resources</button>
              </div>
              <div className="w-full md:w-1/3 bg-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Farm planning documents and tablet"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                  src={RESOURCE_IMG}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Monitoring */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-24 bg-white rounded-[2.5rem] py-20 px-12 border border-outline-variant shadow-lg overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-headline-lg mb-6 text-primary">Real-Time Revenue Monitoring</h2>
              <p className="text-body-lg text-on-surface-variant mb-10">
                Our proprietary dashboard gives you a real-time &ldquo;Soil Health&rdquo; view of your financials. Track revenue streams and input
                costs across every acre.
              </p>
              <div className="space-y-8">
                {[
                  { val: "99%", label: "Ledger Accuracy", desc: "Automated bank reconciliation health", accent: true },
                  { val: "88%", label: "Expense Categorization", desc: "Successfully tagged operational costs", accent: false },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center ${m.accent ? "border-secondary bg-secondary/5" : "border-primary bg-surface-container"}`}>
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
            <div className="bg-surface p-8 rounded-3xl border border-outline-variant shadow-sm recessed-input">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-headline-md text-primary">Fiscal Health Gauge</h4>
                <span className="material-symbols-outlined text-secondary">analytics</span>
              </div>
              <div className="h-64 flex items-end justify-between gap-4">
                {[
                  { label: "Q1", h: "h-2/3", accent: true },
                  { label: "Q2", h: "h-1/2", accent: true },
                  { label: "Q3", h: "h-5/6", accent: true },
                  { label: "PROJ", h: "h-1/4", accent: false },
                ].map((b) => (
                  <div key={b.label} className="flex-1 bg-surface-container-high rounded-t-xl relative">
                    <div className={`absolute bottom-0 left-0 w-full ${b.h} ${b.accent ? "bg-secondary" : "bg-primary"} rounded-t-xl`} />
                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-label-md text-xs ${b.accent ? "text-on-surface-variant" : "text-primary font-bold"}`}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$124k</div>
                  <div className="text-xs text-label-md uppercase text-on-surface-variant">Avg. Revenue</div>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <div className="text-2xl font-bold text-primary">14.8%</div>
                  <div className="text-xs text-label-md uppercase text-on-surface-variant">Operating Margin</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-12">
          <div className="bg-primary text-on-primary rounded-[2rem] p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,108,73,0.2),transparent)]" />
            <div className="relative z-10">
              <h2 className="text-display-lg mb-6">Ready for a Better Harvest?</h2>
              <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
                Join hundreds of family and commercial farms who have traded generic accounting for AceGlobal&apos;s precision ag-bookkeeping.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Link href="/get-started" className="bg-secondary text-on-secondary px-10 py-4 rounded-xl text-headline-md tactile-button hover:opacity-90">
                  Schedule a Free Discovery Call
                </Link>
                <a href="#features" className="px-10 py-4 rounded-xl text-headline-md border border-white/30 hover:bg-white/10 transition-all">
                  Browse Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </div>
  );
}
