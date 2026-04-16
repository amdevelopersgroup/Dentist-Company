"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import GoldButton from "@/components/GoldButton";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Presnenskaya+Embankment+8+Moscow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactsPage() {
  const { lang } = useLanguage();
  const c = t[lang].contacts;

  const contactItems = [
    { icon: Phone, label: c.phoneLabel, value: c.phone, href: `tel:${c.phone.replace(/\D/g, "")}` },
    { icon: Mail, label: c.emailLabel, value: c.email, href: `mailto:${c.email}` },
    { icon: MapPin, label: c.addressLabel, value: c.address, href: "#map" },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <motion.section
        className="mx-auto max-w-7xl px-4 md:px-6 pt-14 md:pt-20 pb-10 md:pb-12 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h1
          className="text-3xl md:text-5xl text-gray-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {c.title}
        </h1>
        <p className="mt-4 md:mt-5 mx-auto max-w-xl text-base md:text-lg text-gray-500">
          {c.subtitle}
        </p>
      </motion.section>

      {/* Two-column layout */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16 md:pb-28">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2">

          {/* ── Left: details + form ─────────────────────────── */}
          <div className="flex flex-col gap-8 md:gap-10">

            {/* Contact detail cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--gold-gradient)" }}
                  >
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      {label}
                    </p>
                    <p className="mt-1 text-base text-gray-800">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Callback form */}
            <motion.div
              className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2
                className="mb-5 md:mb-6 text-xl md:text-2xl text-gray-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {c.formTitle}
              </h2>
              <form className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      {c.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={c.namePlaceholder}
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-yellow-500 placeholder:text-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      {c.phoneFieldLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={c.phonePlaceholder}
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-yellow-500 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    {c.serviceLabel}
                  </label>
                  <select className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-yellow-500 bg-white">
                    <option value="">{c.servicePlaceholder}</option>
                    {c.serviceOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    {c.commentLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={c.commentPlaceholder}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-yellow-500 resize-none placeholder:text-gray-300"
                  />
                </div>

                <div className="pt-2">
                  <GoldButton type="submit">{c.submitLabel}</GoldButton>
                </div>
                <p className="text-center text-xs text-gray-400">
                  {c.privacyNote}
                </p>
              </form>
            </motion.div>
          </div>

          {/* ── Right: map + hours ───────────────────────────── */}
          <div className="flex flex-col gap-4">
            <motion.div
              id="map"
              className="relative flex min-h-[300px] md:min-h-[480px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Faint gold grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Pin + address card */}
              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
                  style={{ background: "var(--gold-gradient)" }}
                >
                  <MapPin className="h-7 w-7 text-white" strokeWidth={1.5} />
                </div>
                <div className="rounded-xl bg-white px-5 py-3 text-center shadow-md">
                  <p
                    className="text-base font-semibold text-gray-900"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {c.mapLabel}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{c.mapSub}</p>
                </div>
              </div>

              {/* Google Maps button */}
              <div className="relative">
                <GoldButton href={GOOGLE_MAPS_URL}>
                  {c.mapCta}
                </GoldButton>
              </div>
            </motion.div>

            {/* Opening hours */}
            <motion.div
              className="rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            >
              <h3
                className="mb-4 text-lg text-gray-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {c.hoursTitle}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {c.hours.map(({ days, hours }) => (
                  <li key={days} className="flex justify-between">
                    <span className="text-gray-500">{days}</span>
                    <span className="font-medium text-gray-800">{hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
