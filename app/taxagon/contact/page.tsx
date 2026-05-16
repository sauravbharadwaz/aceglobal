"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="px-4 md:px-12 max-w-[880px] mx-auto py-12">
      <h1 className="font-display-lg text-3xl mb-4">Contact Us</h1>
      <p className="text-on-surface-variant mb-6">Send us a secure message and we'll get back within 24 hours.</p>
      <form className="grid grid-cols-1 gap-4">
        <input className="p-4 rounded-lg border" placeholder="Full name" />
        <input className="p-4 rounded-lg border" placeholder="Email" />
        <select className="p-4 rounded-lg border">
          <option>Tax Advisory</option>
          <option>Tax Preparation</option>
          <option>Outsourced CFO</option>
        </select>
        <textarea className="p-4 rounded-lg border" rows={6} placeholder="Message" />
        <button className="bg-primary text-white px-6 py-3 rounded-full w-fit">Send Message</button>
      </form>
    </div>
  );
}
