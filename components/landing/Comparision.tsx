"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CgSandClock } from "react-icons/cg";
import { BsLightning } from "react-icons/bs";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";

export const Comparision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="relative mt-12 flex h-fit flex-col items-center gap-3 overflow-hidden md:mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InfoPill title="Comparison" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <MainHeading title="Traditional Agency vs. Working With Avixx" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="relative mt-10 flex w-[90%] justify-between rounded-full border border-neutral-800 bg-neutral-900 p-2 text-sm md:w-[50%] md:text-base"
      >
        <div className="flex items-center gap-2">
          <CgSandClock />
          Traditional agency
        </div>
        <div className="flex items-center">
          <BsLightning />
          Working with Avixx
        </div>
        <div className="absolute -top-5 left-62 hidden md:block">
          <div className="flex size-20 items-center justify-center rounded-full bg-white p-5 text-2xl font-semibold text-black">
            VS
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        style={{ originY: 0 }}
        className="absolute top-61 -z-9 hidden h-[72%] w-0.5 bg-gradient-to-b from-white/40 via-neutral-600/30 to-transparent md:block"
      />

      <div className="mt-5 grid h-auto w-full grid-cols-1 gap-6 md:h-102.5 md:w-[80%] md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -64 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-bl from-white/30 via-white/5 to-transparent p-[1px]"
        >
          <div className="flex h-full flex-col justify-center gap-4 rounded-2xl bg-linear-to-tr from-black via-black/80 to-neutral-700 p-8">
            {[
              "Weeks of discovery before any real work",
              "Design and dev teams working in isolation",
              "Slow feedback loops and approval chains",
              "Vague timelines that slip every other week",
              "Junior engineers billed at senior rates",
              "Code that's hard to maintain past handoff",
              "Monthly retainers with unclear deliverables",
              "No documentation when the project ends",
              "Scope creep with no accountability",
              "Built for the invoice, not the product",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-neutral-300"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-neutral-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 64 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-br from-white/30 via-white/5 to-transparent p-[1px]"
        >
          <div className="flex h-full flex-col justify-center gap-4 rounded-2xl bg-linear-to-tr from-black via-black/80 to-neutral-700 p-8">
            {[
              "Scoped, kicked off, in motion within one week",
              "Design and engineering as a single team",
              "Weekly deliverables, always visible and on track",
              "Clear milestones and honest timelines from day one",
              "Senior engineers on every engagement, no exceptions",
              "Clean, tested, documented code throughout",
              "Measurable output you can see each sprint",
              "Full codebase handoff — documented and ready",
              "Scope changes handled transparently",
              "Built to ship. Built to last.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-neutral-300"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-green-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
