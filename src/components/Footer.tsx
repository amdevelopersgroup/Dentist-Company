"use client";

import { useLanguage } from "@/context/LanguageContext";

const copy = {
  ru: "© 2026 AM Developers Group. Все права защищены.",
  en: "© 2026 AM Developers Group. All rights reserved.",
};

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col items-center gap-1 text-center">
        <span
          className="text-xs tracking-widest uppercase text-gray-400"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Gold Dental
        </span>
        <p className="text-xs text-gray-400">{copy[lang]}</p>
      </div>
    </footer>
  );
}
