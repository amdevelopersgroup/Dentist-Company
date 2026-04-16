"use client";

import { motion } from "framer-motion";

const goldBorderStyle = {
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), var(--gold-gradient)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
} as React.CSSProperties;

interface GoldButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  href?: string;
  className?: string;
}

export default function GoldButton({
  children,
  type = "button",
  href,
  className = "",
}: GoldButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3 text-sm font-semibold text-gray-900";

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${className}`}
        style={goldBorderStyle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={`w-full ${base} ${className}`}
      style={goldBorderStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
