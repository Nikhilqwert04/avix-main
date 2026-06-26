"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0, 0, 0.2, 1] as const;

const Landing = () => {
  return (
    <div className="relative m-5 flex h-[95vh] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-linear-to-b from-neutral-900 via-black to-neutral-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-90"
      >
        <source src="/Landing/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Masking overlay over the video */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          overflow: "clip",
          WebkitMask:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 82.14034346846847%, rgba(0, 0, 0, 1) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 76.31791948198197%, rgba(0, 0, 0, 1) 100%)",
          mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 82.14034346846847%, rgba(0, 0, 0, 1) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 76.31791948198197%, rgba(0, 0, 0, 1) 100%)",
          borderRadius: "0px",
        }}
      />

      <div className="relative z-10 m-4 flex h-full w-full flex-col items-center justify-center gap-5">
        {/* Badge expands from "New" → full text */}
        <motion.div
          className="pr flex items-center overflow-hidden rounded-full border border-neutral-700/50 bg-neutral-900 text-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="shrink-0 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
            Accepting
          </span>
          <motion.span
            className="block overflow-hidden font-medium tracking-tighter whitespace-nowrap"
            initial={{ maxWidth: 0, opacity: 0 }}
            animate={{
              maxWidth: 220,
              opacity: 1,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            transition={{ duration: 0.5, ease, delay: 0.7 }}
          >
            Now accepting new projects
          </motion.span>
        </motion.div>

        <motion.div
          className="text-center leading-[70px] font-semibold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <h1 className="text-[70px] tracking-[-0.06em]">
            Software That Ships.
          </h1>
          <h1 className="text-[70px] tracking-[-0.06em]">
            Products That Scale.
          </h1>
        </motion.div>

        <motion.span
          className="max-w-lg text-center text-[17px] font-normal text-neutral-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          We partner with founders, startups, and growing teams to design and
          engineer digital products — from the first line of code to production
          scale.
        </motion.span>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
        >
          <Link
            className="rounded-full bg-neutral-100 px-5 py-2 text-[15px] font-semibold text-neutral-950 transition-colors duration-150 ease-in hover:bg-neutral-400"
            href={"#"}
          >
            Start a project
          </Link>
          <Link
            className="rounded-full bg-neutral-800 px-4 py-2 text-[15px] font-semibold text-neutral-50 transition-colors duration-150 ease-in hover:bg-neutral-900"
            href={"#"}
          >
            Explore our work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
