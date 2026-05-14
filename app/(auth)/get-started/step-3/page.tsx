"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { step3Schema } from "@/lib/validators/onboarding";
import { OnboardingShell } from "../_components/OnboardingShell";

export default function GetStartedStep3Page() {
  return (
    <Suspense fallback={null}>
      <Step3Inner />
    </Suspense>
  );
}

function Step3Inner() {
  const router = useRouter();
  const params = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);

    const parsed = step3Schema.safeParse({ password, confirm, terms_accepted: terms });
    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrs[i.path.join(".")] = i.message));
      setErrors(fieldErrs);
      return;
    }
    setErrors({});

    const email = params.get("email");
    if (!email) {
      setServerError("Missing email — please restart the signup.");
      return;
    }

    const needsCsv = params.get("bookkeeping_needs") ?? "";
    const meta = {
      full_name: params.get("full_name") ?? "",
      business_type: params.get("business_type") ?? "other",
      business_name: params.get("business_name") ?? null,
      annual_revenue_range: params.get("annual_revenue_range") ?? null,
      bookkeeping_needs: needsCsv ? needsCsv.split(",") : [],
      state: params.get("state") ?? null,
      scale_unit_count: params.get("scale_unit_count") ?? null,
    };

    setSubmitting(true);
    const supabase = createClient();
    const origin = window.location.origin;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: meta,
        emailRedirectTo: `${origin}/auth/callback?next=/dashboard`,
      },
    });
    setSubmitting(false);

    if (error) {
      setServerError(error.message);
      return;
    }

    if (data.session) {
      router.push("/dashboard");
      router.refresh();
    } else {
      router.push("/verify-email");
    }
  }

  return (
    <OnboardingShell step={3} title="Secure Your Account" subtitle="Step 3 of 3: Set a password to finish.">
      <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant">Password</label>
          <input
            type="password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
          />
          {errors.password && <p className="text-xs text-error">{errors.password}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            autoComplete="new-password"
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
          />
          {errors.confirm && <p className="text-xs text-error">{errors.confirm}</p>}
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="mt-1 w-4 h-4 text-secondary rounded border-outline focus:ring-secondary"
          />
          <span className="text-body-md text-on-surface">
            I accept the{" "}
            <a href="#" className="text-secondary underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-secondary underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.terms_accepted && <p className="text-xs text-error">{errors.terms_accepted}</p>}

        {serverError && (
          <div className="text-sm text-error bg-error-container/50 border border-error/20 rounded p-3">{serverError}</div>
        )}

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
            disabled={submitting}
            className="px-10 py-4 rounded-xl bg-primary text-on-primary text-headline-md font-bold tactile-button flex items-center gap-2 hover:bg-secondary transition-all disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Create Account"}
            {!submitting && <span className="material-symbols-outlined">arrow_forward</span>}
          </button>
        </div>
      </form>
    </OnboardingShell>
  );
}
