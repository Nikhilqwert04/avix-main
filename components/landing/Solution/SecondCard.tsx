"use client";
import { motion } from "framer-motion";
import { PiPhoneBold } from "react-icons/pi";
import Glow from "../../Glow";

const waveHeights = [
  12, 28, 40, 20, 48, 32, 16, 44, 24, 36, 14, 42, 26, 48, 18, 38, 22, 46, 30,
  16, 40, 20, 34, 48, 14, 28, 44, 18, 36, 22, 46, 16, 32, 48, 20, 38, 26, 42,
  14, 30, 44, 18, 36, 22, 48, 16, 40, 28, 12, 34,
];

const WaveformBars = () => (
  <div
    className="inset-0 flex w-full flex-row items-center justify-start gap-[6px] px-2"
    style={{
      WebkitMask:
        "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 25%, rgb(0,0,0) 51%, rgba(0,0,0,0.9) 78%, rgba(0,0,0,0) 100%)",
      mask: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 25%, rgb(0,0,0) 51%, rgba(0,0,0,0.9) 78%, rgba(0,0,0,0) 100%)",
    }}
  >
    {waveHeights.map((h, i) => (
      <motion.div
        key={i}
        className="w-[3px] shrink-0 rounded-full bg-neutral-100"
        style={{ height: h, originY: 0.5 }}
        animate={{ scaleY: [0.35, 1, 0.35] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.05,
        }}
      />
    ))}
  </div>
);

const SecondCard = () => (
  <motion.div
    className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-4"
    initial={{ y: -48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
  >
    <div className="mx-auto flex h-[180] w-[80%] items-center justify-center overflow-hidden">
      <WaveformBars />
      <div className="absolute z-10 flex h-60 items-center justify-center">
        <Glow
          className="top-22 left-2 -z-99"
          width="80%"
          height="20%"
          opacity={0.7}
        />
        <div className="h-fit w-fit rounded-full bg-neutral-950 p-4">
          <PiPhoneBold size={42} />
        </div>
      </div>
    </div>
    <p className="mt-5 text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">SaaS Development.</span> Auth,
      billing, multi-tenancy, dashboards — we&apos;ve built these before and
      know what breaks.
    </p>
  </motion.div>
);

export default SecondCard;
