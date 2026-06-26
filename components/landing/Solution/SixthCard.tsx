"use client";
import React from "react";
import { motion } from "framer-motion";
import Glow from "../../Glow";

const chatMessages = [
  "Design to code, seamlessly",
  "No handoffs, no errors",
  "One team, start to finish",
  "Figma to production",
  "Built right from day one",
];

const SixthCard = () => {
  const [msgIndex, setMsgIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [phase, setPhase] = React.useState<"typing" | "hold" | "clearing">(
    "typing"
  );

  React.useEffect(() => {
    const target = chatMessages[msgIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          48
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("hold"), 1200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "hold") {
      const t = setTimeout(() => setPhase("clearing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "clearing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setMsgIndex((i) => (i + 1) % chatMessages.length);
          setPhase("typing");
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [phase, displayed, msgIndex]);

  return (
    <motion.div
      className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-5"
      initial={{ x: 48, y: 32, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.16,
      }}
    >
      <Glow className="-top-4 left-4" width="60%" height="20%" opacity={0.2} />

      {/* Chat visual */}
      <div className="mt-4 flex flex-col gap-4 px-2 pt-2">
        {/* Agent label */}
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-700">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <span className="text-xs text-neutral-500">Designer</span>
        </div>

        {/* Input / message bubble */}
        <div className="flex items-center gap-3 rounded-xl border border-neutral-600 bg-neutral-800/60 px-4 py-3 shadow-lg">
          <span className="min-h-[20px] flex-1 text-sm text-white">
            {displayed}
            <motion.span
              className="inline-block h-4 w-[2px] translate-y-[2px] bg-white"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
              }}
            />
          </span>
          <motion.div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white"
            animate={{ scale: phase === "hold" ? [1, 0.88, 1] : 1 }}
            transition={{ duration: 0.25 }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </motion.div>
        </div>

        {/* Customer label */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-xs text-neutral-500">Engineer</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-700">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-8 text-lg font-medium tracking-tighter text-neutral-400">
        <span className="font-semibold text-white">Product Design & UX.</span>{" "}
        Design and engineering as one team — no handoffs, no translation errors,
        no surprises.
      </p>
    </motion.div>
  );
};

export default SixthCard;
