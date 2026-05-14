"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { step1Schema, type Step1 } from "@/lib/validators/onboarding";
import { OnboardingShell } from "./_components/OnboardingShell";

const BUSINESS_TYPES = [
  { key: "farmer" as const, icon: "agriculture", label: "Farmer" },
  { key: "trucker" as const, icon: "local_shipping", label: "Trucker" },
  { key: "other" as const, icon: "more_horiz", label: "Other" },
];

const REVENUE_RANGES = [
  { value: "0-100k" as const, label: "$0 - $100k" },
  { value: "100k-500k" as const, label: "$100k - $500k" },
  { value: "500k-1m" as const, label: "$500k - $1M" },
  { value: "1m+" as const, label: "$1M+" },
];

const NEEDS_OPTIONS = ["Real-time Ledger", "Expense Tracking", "Payroll Management", "Financial Reporting"];

export default function GetStartedStep1Page() {
  const router = useRouter();
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState<Step1["business_type"]>("farmer");
  const [revenueIdx, setRevenueIdx] = useState(0);
  const [needs, setNeeds] = useState<string[]>(["Real-time Ledger"]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggleNeed(name: string) {
    setNeeds((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data: Step1 = {
      full_name,
      email,
      business_type: businessType,
      annual_revenue_range: REVENUE_RANGES[revenueIdx].value,
      bookkeeping_needs: needs,
    };
    const parsed = step1Schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrs[i.path.join(".")] = i.message;
      });
      setErrors(fieldErrs);
      return;
    }
    const params = new URLSearchParams({
      full_name,
      email,
      business_type: businessType,
      annual_revenue_range: REVENUE_RANGES[revenueIdx].value,
      bookkeeping_needs: needs.join(","),
    });
    router.push(`/get-started/step-2?${params.toString()}`);
  }

  return (
    <OnboardingShell step={1} title="Business Profile" subtitle="Step 1 of 3: Let's define your focus.">
      <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-label-md text-on-surface-variant">Full Legal Name</label>
            <input
              type="text"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
            />
            {errors.full_name && <p className="text-xs text-error">{errors.full_name}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-label-md text-on-surface-variant">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none bg-surface-container-lowest recessed-input transition-all"
            />
            {errors.email && <p className="text-xs text-error">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-label-md text-on-surface-variant">Business Type</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {BUSINESS_TYPES.map((bt) => {
              const selected = businessType === bt.key;
              return (
                <button
                  type="button"
                  key={bt.key}
                  onClick={() => setBusinessType(bt.key)}
                  className={`flex flex-col items-center gap-2 p-6 rounded-xl border-2 transition-all ${
                    selected
                      ? "border-secondary bg-secondary/5"
                      : "border-outline-variant hover:border-secondary/50 bg-surface-container-lowest"
                  }`}
                >
                  <span className={`material-symbols-outlined text-4xl ${selected ? "text-secondary" : "text-on-surface-variant"}`}>
                    {bt.icon}
                  </span>
                  <span className={`text-label-md ${selected ? "font-bold text-on-surface" : ""}`}>{bt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant">Annual Revenue Range</label>
          <div className="relative pt-4">
            <input
              type="range"
              min={0}
              max={REVENUE_RANGES.length - 1}
              step={1}
              value={revenueIdx}
              onChange={(e) => setRevenueIdx(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between mt-4 text-label-md text-outline">
              {REVENUE_RANGES.map((r, i) => (
                <span key={r.value} className={i === revenueIdx ? "text-secondary font-bold" : ""}>
                  {r.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-label-md text-on-surface-variant">Primary Bookkeeping Needs</label>
          <div className="flex flex-wrap gap-2">
            {NEEDS_OPTIONS.map((n) => {
              const checked = needs.includes(n);
              return (
                <label
                  key={n}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                    checked ? "bg-secondary/5 border-secondary/20" : "bg-surface-container-high border-outline-variant"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleNeed(n)}
                    className="w-4 h-4 text-secondary rounded border-outline focus:ring-secondary"
                  />
                  <span className="text-body-md text-on-surface">{n}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between">
          <Link href="/" className="text-body-md text-outline hover:text-on-surface flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </Link>
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
