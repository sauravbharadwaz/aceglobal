import Link from "next/link";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4HqHb0ZXEXKoHTxhs2HXrsfuuDCFu1yCbof6m7XN_ze0qqbq5UUMtuw_pTHtoq10scIvlBW6xGdfvb6St2eKmoJgeJ72sBFNjcpi1FriU2gIRsRhLTIIH60FfoLWJ3t0LKXk_0n2sAo_Tp7vo3Swv3yBSMcEg67s02C6iis5Kzw948GZW6XMdb-3kfoEY26SVluV7lMDkFwa3H35QWGT6AtZa0HlCyBHavnmWcVWyQH7aTzBxs6WpZwmz0wbrSaAYAsn_Vg77xU";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-auth bg-background min-h-screen flex flex-col text-on-background">
      <header className="bg-surface/95 backdrop-blur-md border-b border-outline-variant sticky top-0 z-50 h-20">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop h-full flex items-center justify-between">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="AceGlobal Logo" className="h-10 object-contain" src={LOGO_URL} />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-on-surface hover:text-secondary transition-colors">Home</Link>
            <Link href="/trucking" className="font-medium text-on-surface hover:text-secondary transition-colors">Trucking</Link>
            <Link href="/agriculture" className="font-medium text-on-surface hover:text-secondary transition-colors">Agriculture</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="font-medium text-on-surface hover:text-secondary transition-colors">Login</Link>
            <Link href="/get-started" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm tactile-button">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col">{children}</main>
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-label-md text-on-surface-variant">© 2024 AceGlobal Financial Services.</span>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-label-md text-on-surface-variant hover:text-secondary underline" href="#">Privacy Policy</a>
            <a className="text-label-md text-on-surface-variant hover:text-secondary underline" href="#">Terms of Service</a>
            <a className="text-label-md text-on-surface-variant hover:text-secondary underline" href="#">Security Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
