import Link from "next/link";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP3pDrnY57HgFAaYJUX1D6fEtKS6FXElm7RdYqD_dYke2uNHVBfYybjIN4v7-NkhhDtHwvCA09ek0fLhD5O6XhC6XNeAKiI2auIV6GXX_4czYB1q_twe7u_YZ4UYoCh6ocPM3_00mQLKqPSdMz2uXLeTIbAGZ8H1SLxJ74TCLs2Wjr07Ql81XDnAMpygqA1McAYL99cp1pC8-jQ9mb3IFkj38kfDEVXI1rU6dvucZM8FKDe7l8NFjlxx4eauqFvRaVRUYlQyG1hdo";

export function HomepageNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-container/80 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="AceGlobal Logo" className="h-10 w-auto object-contain logo-white" src={LOGO_URL} />
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-body-md text-white font-bold border-b-2 border-secondary pb-1">Home</Link>
          <Link href="/trucking" className="text-body-md text-white/80 hover:text-white pb-1 transition-colors">Trucking</Link>
          <Link href="/agriculture" className="text-body-md text-white/80 hover:text-white pb-1 transition-colors">Agriculture</Link>
          <a href="#pricing" className="text-body-md text-white/80 hover:text-white pb-1 transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden lg:block text-body-md text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">
            Login
          </Link>
          <Link href="/get-started" className="bg-secondary text-white text-body-md px-6 py-2.5 rounded-lg tactile-button">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
