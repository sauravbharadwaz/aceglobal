import React from "react";

export default function HomePage() {
  return (
    <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
      <section className="pt-8 md:pt-16 mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm">Our Story</span>
          <h1 className="font-display-lg text-4xl md:text-6xl mt-6">Redefining Tax through Intelligence.</h1>
          <p className="mt-4 text-lg text-on-surface-variant max-w-xl">At Taxagon, we believe tax management shouldn't be a seasonal burden, but a continuous strategic advantage.</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full">Schedule a Strategy Session</button>
            <button className="border border-outline px-6 py-3 rounded-full">View Pricing Plans</button>
          </div>
        </div>
        <div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsHBayrqbQpTmJH1ry8fK_Nxdi_dRyjffaxtlTDQkvOtLUw-W1LRgOwMypX8-TUQJyz3iSbIGlTKuDgXdSx22nFv8hhYtUDquEzRfnGacO39EsgA0rQ3EPEfwWnhYAsIHIaJVB_DuqTaInFiYB3JV7rTp0g0l3rmA_W3E8tRExzS1ry8bBnUkIQIqfeyOVMbuOWhgu7LGYwRONp2xsWeAusaPFbCMf5_XLkWTBQ8F0IbxS7eGfmo9Yy5C9a_uHqOS_cNAQCXUrwn0" alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-surface-container-low p-8 rounded-3xl">
        <h2 className="text-2xl font-headline-lg mb-4">Our Mission</h2>
        <p className="text-on-surface-variant max-w-2xl">To empower businesses and individuals with algorithmic precision and human expertise, turning complexity into clarity.</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-8 rounded-3xl">Algorithmic Efficiency</div>
        <div className="bg-primary-container text-white p-8 rounded-3xl text-center">99.9% Accuracy Rate<br/>15k+ Clients Managed</div>
        <div className="p-8 rounded-3xl bg-surface-container-highest">Security First</div>
      </section>
    </div>
  );
}
