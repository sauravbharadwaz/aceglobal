import Link from "next/link";
import { HomepageNav } from "./_components/HomepageNav";
import { Footer } from "./_components/Footer";
import { RevealOnScroll } from "./_components/RevealOnScroll";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ekDrCXWnJFl41V5T14SddFX3pLC_AIFym3H_xxE0QnIEFXvb0KCjyhjPb-EptT5Y55b35suHP57DHVTziAD45ZcNOogiMkYWfPX_7g4uvu7uawjxAMnfrefKnf96djeovw9afeW8C4cxyKw0jm8-Aah2TmaI9OYPsQFA8HicPgSoR01Uu-PCeP2Lwn_skPZHSUlild3AUcHKboPU9WSmXOt9GRHvFUxARixxyAZRwg3uDqmLIEwoebWNeokh_fMyrUm37wiN2wY";

const TEAM = [
  {
    name: "Sarah Jenkins",
    role: "Senior Bookkeeper",
    blurb: "8+ years experience in logistics financial reporting.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAns3YPcTB-GLfCDAFJoXkic4ORmvJDvkgXuLdS92wl1lFOHMejGafKOJ855FoF_SN3vIHMEoEYC0e72wfMcCo8P7G3bRYro_U3QmkF1tPrSRjGMTxROk6h6qXf80itnIAU7up92oXpHhHivy5yZfdCg7Bnbd6A4WM77F9rTDuOBb-_drWO2x7NnLIFfJbzTl7NjzgaJLGuvN6R4-wAXLh03tcJ-nM2-22x7goOnSnDlFnWXIvPSsaICLdYkASchH6YlGsEFWtr-xk",
  },
  {
    name: "Michael Chen",
    role: "Operations Expert",
    blurb: "Specialist in multi-state expense allocation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkcEfr8dF3shlb8an3nhcAQuwxzMpfeA_eqG2OLiUrxXHPlS-jlAqq_JyIURCP33lep-cZMv04-NRQGMsxva0LdiDWh-cj4xPJ1tAzN5VBAhWYlFv0wK52owl6CuFQTMrj5xco9F7KuTTMVqcOHJyspc09CRZldvBsRJGBttRcUJXLFKCsIPt9u7deEK_ILnlS3AOLmKCdw9bOQ6zr4EVW6ZeUCRE0wnC1liB0v54M5n1alyLyPbTfY3aT-yOdTQiGufbkwcAzes",
  },
  {
    name: "Elizabeth Thorne",
    role: "Audit Specialist",
    blurb: "Focuses on compliance and internal ledger controls.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk4RBsv7KcRT1pNjxxOg98bPLxEf5ZlCeXsAUma7YnpoR3DiSrT9wLNWgXSlqdeJ-6Z8yf6eCkYz1UIQLb2jqmkEjQXRAH5xey6Li0MvdCHJRcUR8_z3FArZBEr7Enp9WASqAImdc9dCjkDPJtVmIcWxzHdfRYlGFDd7FmhsLGymwkDFhfTIYUFCRtI9LmZ8D7tvlJ1f-neQ8IsOwjQuuKEXLIW7ek9MaLcEJq9s1OlrgVpXVwH9HbM53n8s7ZjM-9RG0UQ7w2JiU",
  },
  {
    name: "David Miller",
    role: "Agricultural Lead",
    blurb: "12+ years experience in farm yield bookkeeping.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAn5Xan8cTyQULFQbAfsgE6wmXtYfM9DqatluursFEy2SRqYlkCMS-I_RFI6n04yEDpa2Q20phUp23SLC54qSC3FeB6G5L3cpcE4BSnHrOMLim__K4gyldkBz_uuUqt1wkAwWsBQjwb0Cd5Bucll1IcysPoTgx0f7fsIRz4_5auP7MX9qMDWGNHAbMLAX5cZOqNVj_7EttRWwhhasYDBbQvrep3JCE1OU-_BqdmYA-NMJvL5EnLZsTcTL7XY3unGFM3QwqPpwctf0",
  },
];

const TESTIMONIALS = [
  {
    quote: "AceGlobal's automated trucking ledgers saved us 20 hours a month on IFTA reporting alone.",
    name: "Marcus T.",
    title: "Fleet Manager (Trucking)",
  },
  {
    quote:
      "The depth of their agricultural yield tracking is unmatched. Finally, a bookkeeping firm that understands seasonal cash flow.",
    name: "Sarah L.",
    title: "Commercial Grower (Agriculture)",
  },
  {
    quote: "Transitioning to AceGlobal's flat-fee model was the best financial decision our logistics firm made this year.",
    name: "Robert K.",
    title: "Operations Director",
  },
];

const FAQS = [
  {
    q: "How does pricing work?",
    a: "We offer flat-fee monthly packages based on your business complexity. No hidden costs or surprise hourly bills. You pay one monthly rate for comprehensive bookkeeping services.",
  },
  {
    q: "Is my financial data secure?",
    a: "Yes, we use 256-bit bank-level encryption and are SOC 2 compliant. Your data is restricted to authorized personnel and is protected with multiple layers of security.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Our core expertise lies in high-stakes operational industries, specifically Trucking/Logistics and Agriculture. We understand the specific ledger nuances of fuel tracking, equipment depreciation, and seasonal cash flow.",
  },
];

export default function HomePage() {
  return (
    <div className="theme-homepage bg-background text-on-background overflow-x-hidden">
      <RevealOnScroll />
      <HomepageNav />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[900px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-primary-container text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[100px]" />
          </div>
          <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center z-10">
            <div className="space-y-8 reveal active">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="text-label-md text-white tracking-wider uppercase">Official Financial Partner</span>
              </div>
              <h1 className="text-display-lg tracking-tight leading-tight">
                Precision Bookkeeping for <br />
                <span className="text-secondary underline decoration-secondary decoration-4 underline-offset-8">High-Stakes</span> Industries.
              </h1>
              <p className="text-body-lg text-white/80 max-w-xl">
                Expert financial visibility and real-time ledger management designed specifically for the logistical and agricultural sectors. We
                keep your books clean and your business moving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="bg-secondary text-white px-8 py-4 rounded-xl text-headline-md flex items-center justify-center gap-2 tactile-button"
                >
                  Get Started
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a
                  href="#reports"
                  className="bg-white/5 border border-white/20 px-8 py-4 rounded-xl text-headline-md text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  View Sample Reports
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block animate-float">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="3D Financial Visualization"
                  className="rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10"
                  src={HERO_IMG}
                />
                <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl max-w-[220px] border-l-4 border-secondary">
                  <span className="text-label-md text-secondary block mb-2">LEDGER ACCURACY</span>
                  <div className="h-2 w-full bg-white/10 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-secondary w-full" />
                  </div>
                  <p className="text-headline-md text-white">100% Verified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg text-primary mb-4">Why choose AceGlobal?</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                See how we compare to a traditional hourly bookkeeping service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/30 reveal" style={{ transitionDelay: "100ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">star</span>
                  </div>
                  <h3 className="text-headline-md text-primary">AceGlobal</h3>
                </div>
                <ul className="space-y-4">
                  {["Intelligent automation, zero friction", "Flat annual fee, no surprises", "Proactive monthly insights"].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                      <span className="text-body-md text-on-surface">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 opacity-60 reveal" style={{ transitionDelay: "200ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline">history</span>
                  </div>
                  <h3 className="text-headline-md text-primary">Traditional Firms</h3>
                </div>
                <ul className="space-y-4">
                  {["Manual back-and-forth emails", "Hourly billing, no transparency", 'Reactive: "File and forget" mentality'].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline mt-1">cancel</span>
                      <span className="text-body-md text-on-surface-variant">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="text-headline-lg text-primary mb-4">How it Works</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                A seamless onboarding process designed to get your books optimized faster.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />
              <div className="space-y-16 relative">
                {[
                  {
                    n: 1,
                    title: "Secure Connect",
                    body:
                      "Connect your banking and operational software via our bank-grade encrypted bridge. We sync historical data automatically without the manual paperwork.",
                    icon: "link",
                  },
                  {
                    n: 2,
                    title: "AI Ledger Sync",
                    body:
                      "Our engine cross-references transactions to ensure perfectly categorized ledgers. We scan for patterns and anomalies that humans often miss.",
                    icon: "psychology",
                    reverse: true,
                  },
                  {
                    n: 3,
                    title: "Expert Review",
                    body:
                      "A dedicated bookkeeping specialist finalizes your account structure and reviews every categorization to guarantee 100% accuracy.",
                    icon: "verified_user",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className={`flex flex-col ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-8 reveal`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 w-12 h-12 bg-secondary rounded-full border-4 border-white shadow-xl flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">{s.n}</span>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 tilt-card">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">{s.icon}</span>
                        <h4 className="text-headline-md text-primary mb-3">{s.title}</h4>
                        <p className="text-body-md text-on-surface-variant">{s.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg text-primary mb-4">Our Dedicated Professionals</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Year-round support from experienced bookkeeping experts who know your industry.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map((m, i) => (
                <div
                  key={m.name}
                  className="bg-surface-container-low p-8 rounded-[2rem] text-center reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-secondary/10 mb-6 overflow-hidden border-2 border-secondary/20 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={m.name} className="w-full h-full object-cover" src={m.img} />
                  </div>
                  <h4 className="text-headline-md text-primary mb-1">{m.name}</h4>
                  <p className="text-label-md text-secondary uppercase mb-4">{m.role}</p>
                  <p className="text-body-md text-on-surface-variant">{m.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-primary-container text-white px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg mb-4">Everything included. One flat fee.</h2>
              <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                Professional bookkeeping packages designed for modern operations. No hourly billing, no surprises.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essential",
                  desc: "Ideal for small operations with straightforward books.",
                  price: "$99",
                  features: ["Annual P&L Dashboard", "Monthly Reconciliation", "Dedicated Support"],
                  popular: false,
                },
                {
                  name: "Premium",
                  desc: "Enhanced visibility for scaling fleets and larger farms.",
                  price: "$399",
                  features: ["Everything in Essential", "Cash Flow Projections", "Fuel/Yield Efficiency Reports", "Quarterly Strategy Calls"],
                  popular: true,
                },
                {
                  name: "Private Client",
                  desc: "Full-service outsourced bookkeeping for enterprise entities.",
                  price: "$999",
                  features: ["Everything in Premium", "AP/AR Management", "Real-time Ledger Sync", "Priority Concierge Support"],
                  popular: false,
                },
              ].map((tier, i) => (
                <div
                  key={tier.name}
                  className={`p-8 rounded-[2.5rem] flex flex-col reveal relative ${
                    tier.popular
                      ? "bg-secondary md:scale-105 shadow-2xl z-10"
                      : "bg-white/5 border border-white/10"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-headline-md mb-2">{tier.name}</h3>
                  <p className={`mb-6 ${tier.popular ? "text-white/80" : "text-white/60"}`}>{tier.desc}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className={tier.popular ? "text-white/80" : "text-white/60"}>/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-center gap-3 ${tier.popular ? "text-white" : "text-white/80"}`}>
                        <span className={`material-symbols-outlined ${tier.popular ? "" : "text-secondary"}`}>check</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/get-started"
                    className={`w-full py-4 rounded-xl font-bold text-center ${
                      tier.popular
                        ? "bg-white text-secondary tactile-button"
                        : "border border-white/20 hover:bg-white/10 transition-colors"
                    }`}
                  >
                    {tier.name === "Private Client" ? "Contact Sales" : "Get Started"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg text-primary mb-4">Security built for how you work.</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                We protect your financial data with enterprise-grade security standards. Bank-level encryption and secure infrastructure
                throughout.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "verified", title: "SOC 2 Compliant", body: "Enterprise-grade infrastructure audited to SOC 2 standards." },
                { icon: "lock", title: "Bank-Level Encryption", body: "256-bit AES encryption protects all data in transit and at rest." },
                {
                  icon: "account_balance",
                  title: "Professional Credentials",
                  body: "Certified bookkeeping specialists managing every account.",
                },
              ].map((s) => (
                <div key={s.title} className="p-8 bg-surface-container-low rounded-3xl text-center reveal border border-black/5 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-4">{s.icon}</span>
                  <h4 className="text-headline-md text-primary mb-2">{s.title}</h4>
                  <p className="text-body-md text-on-surface-variant">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-max-width mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg text-primary mb-4">Client Success Stories</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Trusted by logistics leaders and agricultural pioneers across the country.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 flex flex-col tilt-card z-depth-1 reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex gap-0.5 mb-6 text-secondary">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-body-lg text-primary italic mb-8 flex-grow">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-outline-variant/30 pt-6">
                    <h4 className="text-headline-md text-primary text-lg">{t.name}</h4>
                    <p className="text-label-md text-secondary uppercase tracking-wider">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-headline-lg text-primary mb-4">Frequently asked questions</h2>
              <p className="text-body-lg text-on-surface-variant">Have more questions? Reach out to our support team.</p>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden reveal group"
                >
                  <summary className="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none">
                    <span className="text-body-lg text-primary font-semibold">{f.q}</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
          <div className="max-w-max-width mx-auto">
            <div className="bg-primary-container rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center reveal shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,theme(colors.secondary),transparent_70%)]" />
              </div>
              <h2 className="text-display-lg text-white mb-8 relative z-10">Ready to optimize your bookkeeping?</h2>
              <p className="text-body-lg text-white/70 max-w-2xl mb-12 relative z-10">
                Join hundreds of fleets and farms that trust AceGlobal for real-time financial visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                <Link href="/get-started" className="bg-secondary text-white px-10 py-5 rounded-2xl text-headline-md tactile-button">
                  Talk to an Expert
                </Link>
                <Link
                  href="/get-started"
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-headline-md hover:bg-white/20 transition-all"
                >
                  Request Free Review
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </div>
  );
}
