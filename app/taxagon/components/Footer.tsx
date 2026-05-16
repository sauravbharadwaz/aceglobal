import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container py-12 mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-primary mb-4">Taxagon</div>
          <p className="text-on-surface-variant">Modern Tax Intelligence.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/taxagon/services">Tax Advisory</Link></li>
            <li><Link href="/taxagon/services">Tax Preparation</Link></li>
            <li><Link href="/taxagon/services">Outsourced CFO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/taxagon/about">About</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-on-surface-variant">hello@taxagon.tech</p>
          <p className="text-on-surface-variant">1-800-TAX-INTELLIGENCE</p>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 mt-8 pt-6 text-center">
        <p className="text-on-surface-variant">© 2024 Taxagon. Modern Tax Intelligence.</p>
      </div>
    </footer>
  );
}
