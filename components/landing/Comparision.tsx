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
      className="relative mt-20 flex h-fit flex-col items-center gap-3 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InfoPill title="Comparision" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <MainHeading title="Traditional way vs AI powered automation" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="relative mt-10 flex w-[50%] justify-between rounded-full border border-neutral-800 bg-neutral-900 p-2"
      >
        <div className="flex items-center gap-2">
          <CgSandClock />
          Traditional way
        </div>
        <div className="flex items-center">
          <BsLightning />
          Avixx automation
        </div>
        <div className="absolute -top-5 left-62">
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
        className="absolute top-61 -z-9 h-[72%] w-0.5 bg-neutral-800"
      />

      <div className="mt-5 grid h-102.5 w-[80%] grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -64 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col justify-center gap-4 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700 p-8"
        >
          {[
            "Slow, manual processes",
            "Prone to human errors",
            "Requires more manpower",
            "Hard to scale without hiring",
            "Limited to working hours",
            "Based on guesswork or delays",
            "Repetitive tasks slow teams",
            "Multi-step, manual hand-offs",
            "Slower response times",
            "Manual follow-ups and tracking",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-neutral-300"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-neutral-500" />
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 64 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col justify-center gap-4 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700 p-8"
        >
          {[
            "Tasks completed instantly",
            "High precision, consistent results",
            "Lower operational costs",
            "Scales effortlessly",
            "Works 24/7 nonstop",
            "Real-time insights and data-driven",
            "Automates busywork for higher output",
            "Smooth, automatic flow",
            "Instant replies through chat/voice agents",
            "Automated nurturing and reminders",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-neutral-300"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-green-400" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
