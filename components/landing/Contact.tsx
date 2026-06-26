"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const Contact = () => {
  return (
    <motion.div
      className="relative mt-40 flex h-[75vh] w-full flex-col items-center justify-center gap-7 overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease }}
    >
      {/* Top gradient border — bright center, dim edges */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.12) 80%, transparent 100%)",
        }}
      />
      {/* Radial center glow */}
      <div
        className="pointer-events-none absolute inset-0 -top-120"
        style={{
          background:
            "radial-gradient(ellipse 100% 55% at 50% 50%, rgba(80,80,80,0.35) 0%, transparent 50%)",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 27 25"
          >
            <path
              d="M 21.12 22.771 C 26.27 17.529 26.232 9.117 21.036 3.921 C 15.84 -1.275 7.428 -1.311 2.187 3.838 L 6.605 8.256 C 7.302 8.953 8.427 8.918 9.315 8.488 C 11.368 7.49 13.828 7.903 15.442 9.517 C 17.056 11.132 17.469 13.592 16.471 15.645 C 16.04 16.532 16.005 17.657 16.702 18.354 L 21.12 22.771 Z"
              fill="white"
            />
            <path
              d="M 18.743 24.991 L 12.189 24.991 C 11.242 24.991 10.335 24.614 9.665 23.945 L 1.045 15.326 C 0.376 14.657 0 13.748 0 12.801 L 0 6.248 Z M 6.694 24.991 L 2.678 24.991 C 1.199 24.991 0 23.792 0 22.313 L 0 18.297 Z"
              fill="white"
            />
          </svg>
          <span className="text-[18px] font-semibold tracking-tight text-white">
            Notch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeUp} className="max-w-2xl text-center">
          <h2 className="text-[52px] leading-[1.05] font-bold tracking-[-0.04em] text-white">
            Ready to Automate Your Business
            <br />
            with Notch Automation?
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-full bg-neutral-100 px-6 py-2.5 text-[15px] font-semibold text-neutral-950 transition-colors duration-150 hover:bg-neutral-300"
          >
            Let&apos;s automate
          </Link>
          <Link
            href="#"
            className="rounded-full bg-neutral-800 px-6 py-2.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-neutral-700"
          >
            Need to talk first
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
