import type { Metadata } from "next";
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Taxagon — Modern Tax Intelligence",
  description: "Taxagon — advisory, preparation, and outsourced CFO services.",
};

export default function TaxagonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
