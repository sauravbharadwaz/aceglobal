"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { OnboardingShell } from "../_components/OnboardingShell";
import { step2Schema } from "@/lib/validators/onboarding";

export default function GetStartedStep2Page() {
  return (
    <Suspense fallback={null}>
      <Step2Inner />
    </Suspense>
  );
}

function Step2Inner() {
  const router = useRouter();
  const params = useSearchParams();
  const businessType = params.get("business_type") ?? "other";

  const unitLabel =
    businessType === "trucker" ? "Fleet size (vehicles)" : businessType === "farmer" ? "Acres under management" : "Operational scale";

  const [business_name, setBusinessName] = useState("");
  const [scale_unit_count, setScaleUnitCount] = useState("0");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = step2Schema.safeParse({
      business_name,
      scale_unit_count,
      state: state.toUpperCase(),
    });
    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrs[i.path.join(".")] = i.message));
      setErrors(fieldErrs);
      return;
    }
    const next = new URLSearchParams(params);
    next.set("business_name", business_name);
    next.set("scale_unit_count", String(parsed.data.scale_unit_count));
    next.set("state", parsed.data.state);
    router.push(`/get-started/step-3?${next.toString()}`);
  }

  return (
    <OnboardingShell step={2} title="Business Details" subtitle="Step 2 of 3: Tell us about your operation.">
      <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant">Business Name</label>
          <input
            type="text"
            value={business_name}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Acme Bookkeeping LLC"
            className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
          />
          {errors.business_name && <p className="text-xs text-error">{errors.business_name}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-label-md text-on-surface-variant">{unitLabel}</label>
            <input
              type="number"
              min={0}
              value={scale_unit_count}
              onChange={(e) => setScaleUnitCount(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
            />
            {errors.scale_unit_count && <p className="text-xs text-error">{errors.scale_unit_count}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-label-md text-on-surface-variant">State (2-letter)</label>
            <input
              type="text"
              maxLength={2}
              value={state}
              onChange={(e) => setState(e.target.value.toUpperCase())}
              placeholder="TX"
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all uppercase"
            />
            {errors.state && <p className="text-xs text-error">{errors.state}</p>}
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-body-md text-outline hover:text-on-surface flex items-center gap-2 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <button
            type="submit"
            className="px-10 py-4 rounded-xl bg-primary text-on-primary text-headline-md font-bold tactile-button flex items-center gap-2 hover:bg-secondary transition-all"
          >
            Continue
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </form>
    </OnboardingShell>
  );
}
