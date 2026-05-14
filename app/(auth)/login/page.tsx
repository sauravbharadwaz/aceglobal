"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const supabase = createClient();
    const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (signInErr) {
      setError(signInErr.message);
      return;
    }
    router.push(search.get("next") || "/dashboard");
    router.refresh();
  }

  async function handleOAuth(provider: "google" | "azure") {
    setError(null);
    const supabase = createClient();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const { error: oauthErr } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${origin}/auth/callback?next=/dashboard` },
    });
    if (oauthErr) setError(oauthErr.message);
  }

  return (
    <section className="flex-grow flex items-center justify-center px-margin-mobile py-6 relative overflow-hidden pt-12">
      <div className="w-full max-w-[440px]">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="h-1.5 w-full bg-secondary" />
          <div className="p-8 md:p-10">
            <h1 className="text-headline-md text-on-surface mb-2">Welcome back</h1>
            <p className="text-body-md text-on-surface-variant mb-6">Sign in to access your AceGlobal dashboard.</p>

            <form onSubmit={handleEmailLogin} className="space-y-6">
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2" htmlFor="email">
                  CORPORATE EMAIL
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-low rounded border border-outline-variant recessed-input text-body-md text-on-surface focus:outline-none focus:border-secondary transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-label-md text-on-surface-variant" htmlFor="password">
                    SECURE PASSWORD
                  </label>
                  <a className="text-label-md text-secondary font-bold hover:underline" href="#">
                    FORGOT?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-surface-container-low rounded border border-outline-variant recessed-input text-body-md text-on-surface focus:outline-none focus:border-secondary transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label="Toggle password visibility"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-error bg-error-container/50 border border-error/20 rounded p-3">{error}</div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-on-primary text-headline-md py-4 rounded-lg tactile-button transition-transform flex items-center justify-center gap-2 hover:bg-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Signing in..." : "Sign In"}</span>
                {!submitting && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex-grow h-px bg-outline-variant" />
              <span className="text-label-md text-outline shrink-0">OR SECURE ACCESS WITH</span>
              <div className="flex-grow h-px bg-outline-variant" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => handleOAuth("google")}
                className="flex items-center justify-center gap-2 py-3 bg-surface-container-lowest rounded border border-outline-variant hover:bg-surface-container-low transition-colors tactile-button"
              >
                <span className="material-symbols-outlined text-[#ea4335]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  g_translate
                </span>
                <span className="text-body-md font-medium text-on-surface">Google</span>
              </button>
              <button
                onClick={() => handleOAuth("azure")}
                className="flex items-center justify-center gap-2 py-3 bg-surface-container-lowest rounded border border-outline-variant hover:bg-surface-container-low transition-colors tactile-button"
              >
                <span className="material-symbols-outlined text-[#0078d4]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  grid_view
                </span>
                <span className="text-body-md font-medium text-on-surface">Microsoft</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 border-t border-outline-variant text-center">
            <p className="text-body-md text-on-surface-variant">
              First time for your company?{" "}
              <Link href="/get-started" className="text-secondary font-bold hover:underline">
                Get Started
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-60">
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span className="text-label-md uppercase">SOC2 COMPLIANT</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">lock_person</span>
            <span className="text-label-md uppercase">AES-256 ENCRYPTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
