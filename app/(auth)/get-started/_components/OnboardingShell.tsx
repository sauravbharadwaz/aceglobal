export function OnboardingShell({
  step,
  title,
  subtitle,
  children,
}: {
  step: 1 | 2 | 3;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const pct = step === 1 ? 33 : step === 2 ? 66 : 100;
  const dashOffset = 201.06 - (201.06 * pct) / 100;

  return (
    <div className="max-w-max-width mx-auto w-full px-margin-mobile md:px-margin-desktop pt-12 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-label-md text-secondary uppercase tracking-widest bg-secondary-container/30 px-3 py-1 rounded-full">
            Secure Onboarding
          </span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-outline-variant overflow-hidden">
          <div className="p-8 border-b border-outline-variant bg-surface-container-low/50 flex justify-between items-center">
            <div>
              <h2 className="text-headline-md text-on-surface">{title}</h2>
              <p className="text-body-md text-on-surface-variant">{subtitle}</p>
            </div>
            <div className="w-20 h-20 relative flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle className="text-surface-container-highest" cx="40" cy="40" r="32" fill="transparent" stroke="currentColor" strokeWidth="6" />
                <circle
                  className="text-secondary"
                  cx="40"
                  cy="40"
                  r="32"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray="201.06"
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-label-md font-bold text-on-surface">{pct}%</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
