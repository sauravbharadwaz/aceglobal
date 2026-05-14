import Link from "next/link";
import { LightNav } from "../_components/LightNav";
import { Footer } from "../_components/Footer";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMEdAdNawMuSQwtWLJQDzPaL-_TjZ-aZvAqxR0YTN66qAmmw5x5vcvwyr9B7J1302aRWmu0cIZBYrGkOs8NF521R3UVF5pHBa31PD_HWcv3XIDObhfjHR48mIPyQk7DjitAgMdnHsKZS7bYU30UtArTUc812hzhFbENm_ISDhyCdgcXuyHL0jFod2vcUzAE9Z4LMQCc9zdGMke0nc2r_DWsc5uUqWngt9fGRsjcg9BNsFMr9AjowW5diG2p_dqEkWUPrpaeddUohQ";
const DATA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFH2uVnvtn93acrpo7yyYyONRTNON35lfTnzjsnnOROq8kPfcsIz2UhyH2Tm2Ysh14x0j3cdU1rs3qyGzUp1ka_m1sl23DHfDojvqMNbBBCSZd1avjT1WsLTeE27Oa8JP7K4kDgi91ulyLGYSxLsqv8601Yie4c3ChqHOKnfg5yTcrXGRv8sswJMNMQS57-3hzkNnDyqVjbVLf4wMQavEgxeGFeByEbcj8QNCqoaGySA4FiYlEkqm2pSsCihZLjX_eJ___6pcDTCE";

export default function TruckingPage() {
  return (
    <div className="theme-trucking bg-background text-on-background min-h-screen flex flex-col">
      <LightNav active="trucking" />

      <main className="pt-20 flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-container-lowest py-24">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-6 items-center">
            <div className="z-10">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-md rounded-full mb-6">
                Logistics &amp; Bookkeeping Services
              </span>
              <h1 className="text-display-lg text-on-surface mb-6">Precise Bookkeeping for the Long Haul.</h1>
              <p className="text-body-lg text-on-surface-variant mb-8 max-w-lg">
                AceGlobal provides owner-operators and large fleets with 3D-level visibility into IFTA records, per-diem tracking, and financial
                performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started" className="bg-primary text-on-primary px-8 py-4 rounded-xl text-headline-md tactile-button">
                  Secure My Fleet
                </Link>
                <a href="#solutions" className="border border-outline-variant bg-surface text-on-surface px-8 py-4 rounded-xl text-headline-md tactile-button">
                  View Solutions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Professional semi-truck on highway at sunset"
                className="rounded-2xl shadow-2xl relative z-10 border border-outline-variant object-cover aspect-video"
                src={HERO_IMG}
              />
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section id="solutions" className="py-24 bg-surface">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-12">
              <h2 className="text-headline-lg text-on-surface">Mission Critical Bookkeeping</h2>
              <p className="text-body-md text-on-surface-variant mt-2">
                Specialized financial tools built for the modern logistics professional.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* IFTA Tracker */}
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
                    { label: "Miles", value: "12,482" },
                    { label: "Fuel (Gal)", value: "1,940" },
                    { label: "Audit Score", value: "98%", accent: true },
                  ].map((s) => (
                    <div key={s.label} className="bg-surface-container rounded-lg p-4 recessed-input text-center">
                      <div className="text-on-surface-variant text-label-md uppercase mb-1">{s.label}</div>
                      <div className={`text-headline-md ${s.accent ? "text-secondary" : "text-primary"}`}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-3/4 rounded-full" />
                </div>
                <p className="mt-4 text-body-md text-on-surface-variant">
                  Automated mileage recording across 48 states with instant receipt OCR for bulletproof books.
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
                    <span className="text-headline-md text-secondary">$18,400</span>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl border-l-4 border-secondary">
                    <span className="text-label-md text-secondary block mb-1">PRO TIP</span>
                    <p className="text-xs italic text-on-surface-variant">
                      You have 12 untracked days in the current quarter to reconcile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner-Operator Suite */}
              <div className="md:col-span-5 bg-primary p-6 rounded-xl shadow-lg text-on-primary">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 block">account_balance_wallet</span>
                <h3 className="text-headline-md mb-4 text-white">Owner-Operator Full Suite</h3>
                <ul className="space-y-4">
                  {["Quarterly Financial Reporting", "Load-by-Load Profitability Analysis", "Audit-Ready Financial Statements"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed text-sm">check_circle</span>
                      <span className="text-body-md">{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className="mt-8 inline-block w-full py-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg text-label-md uppercase tracking-widest tactile-button text-center"
                >
                  Access Portal
                </Link>
              </div>

              {/* Fleet Analytics */}
              <div className="md:col-span-7 rounded-xl border border-outline-variant overflow-hidden relative min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Logistics data visualization" className="absolute inset-0 w-full h-full object-cover" src={DATA_IMG} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white text-headline-md">Real-Time Fleet Analytics</h4>
                  <p className="text-white/80 text-body-md">Every mile, every gallon, every dollar accounted for in high-fidelity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg text-on-surface">Tailored for Every Journey</h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
                Whether you are a solo operator or a national fleet, AceGlobal scales with your odometer.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "SOLO OPERATOR",
                  price: "$199",
                  features: ["IFTA Bookkeeping", "Basic General Ledger", "Financial Reporting"],
                  popular: false,
                },
                {
                  name: "MULTI-UNIT FLEET",
                  price: "$449",
                  features: ["All Solo Features", "Multi-State Fuel Records", "Dedicated Success Manager", "Per-Diem Optimization Logs"],
                  popular: true,
                },
                {
                  name: "ENTERPRISE LOGISTICS",
                  price: "Custom",
                  features: ["Full Back-Office Outsourcing", "Custom API Integration", "Detailed Financial Visibility"],
                  popular: false,
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`bg-surface p-8 rounded-2xl border-2 flex flex-col relative ${
                    tier.popular ? "border-primary shadow-xl scale-105 z-10" : "border-outline-variant"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-label-md uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="text-label-md text-on-surface-variant mb-4">{tier.name}</div>
                  <div className="text-display-lg mb-4 text-primary">
                    {tier.price}
                    {tier.price !== "Custom" && <span className="text-xl text-on-surface-variant">/mo</span>}
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2 text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary">done</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/get-started"
                    className={`w-full text-label-md py-3 rounded-lg text-center transition-all ${
                      tier.popular
                        ? "bg-primary text-on-primary tactile-button"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
                    }`}
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Select Plan"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="bg-primary text-on-primary rounded-3xl p-6 md:p-16 flex flex-col md:flex-row items-center gap-6 justify-between overflow-hidden relative">
              <div className="z-10 relative">
                <h2 className="text-display-lg mb-6">Master Your Financial Clarity.</h2>
                <p className="text-body-lg text-white/80 mb-8 max-w-xl">
                  Join over 1,200 truckers who have maximized their profits and simplified their records with AceGlobal&apos;s elite bookkeeping.
                </p>
                <Link href="/get-started" className="inline-block bg-white text-primary px-8 py-4 rounded-xl text-headline-md tactile-button">
                  Get a Free Financial Review
                </Link>
              </div>
              <div className="md:w-1/3 z-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                  <p className="text-body-md italic text-white mb-4">
                    &ldquo;AceGlobal found $8,000 in missed per-diem entries in my first year. The software makes my financial visibility a
                    breeze.&rdquo;
                  </p>
                  <div className="text-label-md text-secondary-fixed">M. Thompson, Owner-Operator</div>
                </div>
              </div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </div>
  );
}
