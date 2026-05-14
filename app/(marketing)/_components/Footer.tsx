import Link from "next/link";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP3pDrnY57HgFAaYJUX1D6fEtKS6FXElm7RdYqD_dYke2uNHVBfYybjIN4v7-NkhhDtHwvCA09ek0fLhD5O6XhC6XNeAKiI2auIV6GXX_4czYB1q_twe7u_YZ4UYoCh6ocPM3_00mQLKqPSdMz2uXLeTIbAGZ8H1SLxJ74TCLs2Wjr07Ql81XDnAMpygqA1McAYL99cp1pC8-jQ9mb3IFkj38kfDEVXI1rU6dvucZM8FKDe7l8NFjlxx4eauqFvRaVRUYlQyG1hdo";

export function Footer({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <footer
      className={`w-full mt-auto border-t ${
        isDark ? "bg-primary-container border-white/10" : "bg-surface-container-lowest border-outline-variant"
      }`}
    >
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="AceGlobal Logo"
            className={`h-8 w-auto object-contain ${isDark ? "logo-white" : ""}`}
            src={LOGO_URL}
          />
          <p
            className={`text-label-md text-center md:text-left max-w-sm ${
              isDark ? "text-white/70" : "text-on-surface-variant"
            }`}
          >
            © 2024 AceGlobal Financial Services.
            <br />
            Professional Bookkeeping &amp; Financial Strategy.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { href: "#", label: "Industry Insights" },
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
            { href: "/login", label: "Client Login" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-label-md hover:text-secondary underline transition-all ${
                isDark ? "text-white/70" : "text-on-surface-variant"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
