import React from "react";

export default function ServicesPage() {
  const services = [
    { title: "Tax Advisory", desc: "Strategic tax planning tailored to your growth objectives." },
    { title: "Tax Preparation", desc: "High-fidelity tax filing services for complex entities." },
    { title: "Outsourced CFO", desc: "Fractional executive expertise to manage your treasury." },
    { title: "Company Formation", desc: "Launch your vision with structural integrity." },
  ];

  return (
    <div className="px-4 md:px-12 max-w-[1280px] mx-auto py-12">
      <h1 className="font-display-lg text-4xl mb-6">Services Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="glass-card rounded-xl p-8">
            <h3 className="font-headline-md mb-2">{s.title}</h3>
            <p className="text-on-surface-variant">{s.desc}</p>
            <a className="inline-flex items-center gap-2 text-primary mt-4" href="#">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
