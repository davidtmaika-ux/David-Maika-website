"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/framework-library", label: "Frameworks" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/resources", label: "Resources" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-bold tracking-wide">
          <img
            src="/logo.jpg"
            alt="David Maika"
            className="h-9 w-9 rounded-full border border-gold/40 object-cover"
          />
          DAVID <span className="text-gold">MAIKA</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-dim transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-[#14110A] transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="lg:hidden text-text"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-text-dim hover:text-text"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
