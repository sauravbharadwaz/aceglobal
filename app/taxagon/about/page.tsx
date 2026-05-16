import React from "react";

export default function AboutPage() {
  return (
    <div className="px-4 md:px-12 max-w-[1280px] mx-auto py-12">
      <h1 className="font-display-lg text-4xl mb-4">About Taxagon</h1>
      <p className="text-on-surface-variant mb-8">Taxagon builds the world's most sophisticated tax intelligence platform for the modern era.</p>
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-headline-md mb-2">What makes us different?</h3>
          <p className="text-on-surface-variant">Traditional accounting is reactive. Taxagon is proactive.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
            <div className="material-symbols-outlined text-primary">check_circle</div>
            <div>
              <div className="font-bold">Real-time Insights</div>
              <div className="text-sm text-on-surface-variant">No more waiting for end-of-quarter reports.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
