"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import GoldButton from "@/components/GoldButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const s = t[lang].services;

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
          {s.title}
        </h1>
        <p className="mt-4 md:mt-5 mx-auto max-w-xl text-base md:text-lg text-gray-500">
          {s.subtitle}
        </p>
      </motion.section>

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16 md:pb-28">
        <div className="flex flex-col gap-4 md:gap-6">
          {s.items.map(({ title, description, price, duration }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid items-start gap-5 md:gap-6 rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md lg:grid-cols-[1fr_auto] lg:items-center"
            >
              {/* Left */}
              <div className="flex flex-col gap-2 md:gap-3">
                <h2
                  className="text-xl md:text-2xl text-gray-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>
                    <span className="font-medium text-gray-700">
                      {s.durationLabel}:
                    </span>{" "}
                    {duration}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-row flex-wrap items-center gap-4 lg:flex-col lg:items-end">
                <p
                  className="text-xl md:text-2xl font-semibold"
                  style={{
                    background: "var(--gold-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {price}
                </p>
                <GoldButton href="/contacts" className="px-6 py-2 text-sm">
                  {s.ctaLabel}
                </GoldButton>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 md:mt-10 text-center text-sm text-gray-400">
          {s.disclaimer}
        </p>
      </section>
    </main>
  );
}
