"use client";

import { Brain, Smile, Star, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import GoldButton from "@/components/GoldButton";

const featureIcons = [Brain, Smile, Star, UserCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLanguage();
  const h = t[lang].home;

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1
            className="text-3xl md:text-5xl lg:text-6xl leading-tight text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {h.heroTitle1} <br />
            <span
              style={{
                background: "var(--gold-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {h.heroTitle2}
            </span>
          </h1>
          <p className="max-w-md text-base md:text-lg leading-relaxed text-gray-500">
            {h.heroSubtitle}
          </p>
          <div>
            <GoldButton href="/contacts">{h.heroCta}</GoldButton>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src="https://placehold.co/800x600/f5f0e8/c9a84c?text=Luxury+Clinic"
            alt="Luxury clinic interior"
            width={800}
            height={600}
            className="rounded-2xl object-cover shadow-xl w-full max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyChooseUs() {
  const { lang } = useLanguage();
  const h = t[lang].home;

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="text-2xl md:text-4xl text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {h.whyTitle}
          </h2>
          <p className="mt-4 text-gray-500">{h.whySubtitle}</p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {h.features.map(({ title, description }, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-col gap-4 rounded-2xl bg-white p-6 md:p-8 shadow-sm"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "var(--gold-gradient)" }}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg text-gray-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Our Doctors ──────────────────────────────────────────────────────────────

function OurDoctors() {
  const { lang } = useLanguage();
  const h = t[lang].home;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="text-2xl md:text-4xl text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {h.doctorsTitle}
          </h2>
          <p className="mt-4 text-gray-500">{h.doctorsSubtitle}</p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {h.doctors.map(({ name, specialty }, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,149,63,0.25)] hover:-translate-y-1"
            >
              <img
                src={`https://placehold.co/400x500/f5f0e8/c9a84c?text=${encodeURIComponent(name)}`}
                alt={name}
                width={400}
                height={500}
                className="h-64 md:h-72 w-full object-cover"
              />
              <div className="flex flex-col gap-1 p-5 md:p-6">
                <h3
                  className="text-xl text-gray-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-gray-500">{specialty}</p>
                <div
                  className="mt-3 h-px w-10 transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--gold-gradient)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyChooseUs />
      <OurDoctors />
    </main>
  );
}
