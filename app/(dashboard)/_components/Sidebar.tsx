import Link from "next/link";
import { signOut } from "../actions";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4HqHb0ZXEXKoHTxhs2HXrsfuuDCFu1yCbof6m7XN_ze0qqbq5UUMtuw_pTHtoq10scIvlBW6xGdfvb6St2eKmoJgeJ72sBFNjcpi1FriU2gIRsRhLTIIH60FfoLWJ3t0LKXk_0n2sAo_Tp7vo3Swv3yBSMcEg67s02C6iis5Kzw948GZW6XMdb-3kfoEY26SVluV7lMDkFwa3H35QWGT6AtZa0HlCyBHavnmWcVWyQH7aTzBxs6WpZwmz0wbrSaAYAsn_Vg77xU";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/dashboard/reports", icon: "bar_chart", label: "Reports" },
  { href: "/dashboard/documents", icon: "folder", label: "Documents" },
  { href: "/dashboard/settings", icon: "settings", label: "Settings" },
];

export function Sidebar({ fullName, email }: { fullName: string; email: string }) {
  return (
    <aside className="w-64 shrink-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col">
      <div className="p-6 border-b border-outline-variant">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="AceGlobal" className="h-9 object-contain" src={LOGO_URL} />
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-body-md">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-outline-variant">
        <div className="px-4 py-3 mb-2">
          <div className="text-body-md font-semibold text-on-surface truncate">{fullName || "Welcome"}</div>
          <div className="text-xs text-on-surface-variant truncate">{email}</div>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-body-md">Sign out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
