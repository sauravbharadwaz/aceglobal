import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <section className="flex-grow flex items-center justify-center px-margin-mobile py-16">
      <div className="max-w-lg w-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-10 text-center">
        <span className="material-symbols-outlined text-secondary text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
          mark_email_unread
        </span>
        <h1 className="text-headline-md text-on-surface mb-3">Check your inbox</h1>
        <p className="text-body-md text-on-surface-variant mb-6">
          We&apos;ve sent a verification link to the email address you provided. Click it to confirm your account — you&apos;ll be brought
          straight to your dashboard.
        </p>
        <p className="text-sm text-outline mb-8">
          Didn&apos;t get it? Check your spam folder, or wait a couple of minutes before retrying.
        </p>
        <Link href="/login" className="inline-block px-8 py-3 bg-primary text-on-primary rounded-lg tactile-button">
          Back to Login
        </Link>
      </div>
    </section>
  );
}
