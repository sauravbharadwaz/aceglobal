import Link from "next/link";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4HqHb0ZXEXKoHTxhs2HXrsfuuDCFu1yCbof6m7XN_ze0qqbq5UUMtuw_pTHtoq10scIvlBW6xGdfvb6St2eKmoJgeJ72sBFNjcpi1FriU2gIRsRhLTIIH60FfoLWJ3t0LKXk_0n2sAo_Tp7vo3Swv3yBSMcEg67s02C6iis5Kzw948GZW6XMdb-3kfoEY26SVluV7lMDkFwa3H35QWGT6AtZa0HlCyBHavnmWcVWyQH7aTzBxs6WpZwmz0wbrSaAYAsn_Vg77xU";

export function LightNav({ active }: { active: "home" | "trucking" | "agriculture" }) {
  const linkClass = (key: typeof active) =>
    key === active
      ? "text-primary font-semibold border-b-2 border-secondary pb-1 text-body-md"
      : "text-on-surface-variant hover:text-primary pb-1 text-body-md transition-colors";

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant h-20">
      <nav className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="AceGlobal Logo" className="h-10 w-auto object-contain" src={LOGO_URL} />
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("home")}>Home</Link>
          <Link href="/trucking" className={linkClass("trucking")}>Trucking</Link>
          <Link href="/agriculture" className={linkClass("agriculture")}>Agriculture</Link>
          <a href="#resources" className="text-on-surface-variant hover:text-primary pb-1 text-body-md transition-colors">
            Resources
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden md:block px-6 py-2 rounded-lg text-body-md text-primary hover:bg-surface-container-low transition-colors">
            Login
          </Link>
          <Link href="/get-started" className="px-6 py-2 rounded-lg bg-primary text-on-primary text-body-md font-semibold tactile-button">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
