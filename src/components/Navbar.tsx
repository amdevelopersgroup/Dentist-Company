"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const nav = t[lang].nav;
  const [open, setOpen] = useState(false);

  const links = [
    { label: nav.home, href: "/" },
    { label: nav.services, href: "/services" },
    { label: nav.contacts, href: "/contacts" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "var(--gold-gradient)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-white tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Gold Dental
        </Link>

        {/* Desktop: links + language switcher */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-white font-medium">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:opacity-75 transition-opacity">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 rounded-full border border-white/40 overflow-hidden text-xs font-semibold">
            {(["ru", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                  lang === l
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher + burger button */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/40 overflow-hidden text-xs font-semibold">
            {(["ru", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                  lang === l
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-white p-1"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-t border-white/20"
          style={{ background: "var(--gold-gradient)" }}
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-white font-medium hover:bg-white/15 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
