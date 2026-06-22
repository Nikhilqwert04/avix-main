"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.2, 1] as const;

const Landing = () => {
  return (
    <div className="relative m-8 flex h-full min-w-[94vw] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-linear-to-b from-neutral-900 via-black to-neutral-900">
      {/* Badge expands from "New" → full text */}
      <motion.div
        className="pr flex items-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 text-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="shrink-0 rounded-full bg-blue-600 px-1 py-0.5 text-white">
          New
        </span>
        <motion.span
          className="block overflow-hidden whitespace-nowrap"
          initial={{ maxWidth: 0, opacity: 0 }}
          animate={{
            maxWidth: 160,
            opacity: 1,
            paddingLeft: 5,
            paddingRight: 5,
          }}
          transition={{ duration: 0.5, ease, delay: 0.7 }}
        >
          Custom Ai Agents
        </motion.span>
      </motion.div>

      <motion.div
        className="text-center leading-[70px] font-semibold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      >
        <h1 className="text-[80px] tracking-tighter">
          We Make AI Work for You
        </h1>
        <h1 className="text-[80px] tracking-tighter">Not Against You.</h1>
      </motion.div>

      <motion.span
        className="max-w-md text-center text-neutral-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
      >
        We design AI systems that save time, cut costs, and make your business
        run smoother — without the complexity.
      </motion.span>

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.45 }}
      >
        <Link
          className="rounded-full bg-neutral-100 px-5 py-2 font-semibold text-neutral-950 transition-colors duration-200 ease-in hover:bg-neutral-400"
          href={"#"}
        >
          Book a call
        </Link>
        <Link
          className="rounded-full bg-neutral-800 px-4 py-2 font-semibold text-neutral-50 transition-colors duration-200 ease-in hover:bg-neutral-900"
          href={"#"}
        >
          View services
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;
