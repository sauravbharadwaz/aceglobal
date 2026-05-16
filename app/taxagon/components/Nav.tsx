"use client";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-[1280px] mx-auto">
        <Link href="/taxagon" className="font-headline-md text-headline-md font-bold text-primary">
          Taxagon
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/taxagon/services" className="font-medium hover:text-primary">Services</Link>
          <Link href="/taxagon/about" className="font-semibold border-b-2 border-transparent hover:border-primary pb-1">About</Link>
          <Link href="/taxagon/contact" className="font-medium hover:text-primary">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block">Client Portal</Link>
          <Link href="/taxagon/contact" className="bg-primary-container text-white px-4 py-2 rounded-full">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
