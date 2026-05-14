import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceGlobal — Professional Bookkeeping",
  description:
    "Precision bookkeeping for trucking, logistics, and agricultural businesses. Real-time ledgers, IFTA tracking, seasonal cash flow management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Metropolis:wght@600;700;800&family=JetBrains+Mono:wght@500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
