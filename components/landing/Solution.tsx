"use client";
import InfoPill from "../ui/InfoPill";
import Glow from "../Glow";
import { motion } from "framer-motion";
import { BsClock } from "react-icons/bs";
import { PiPhoneBold } from "react-icons/pi";

const DashedConnector = () => (
  <div className="flex h-8 items-center justify-center">
    <div
      className="h-full w-[2px]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, #555 0px, #555 4px, transparent 4px, transparent 8px)",
      }}
    />
  </div>
);

export const FirstCard = () => (
  <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-4">
    <p className="text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">Workflow Automation.</span>{" "}
      Automate repetitive tasks and efficiently streamline your daily
      operations.
    </p>

    <Glow className="top-20 left-11" width="80%" height="20%" opacity={0.1} />
    <AnalyzingContent />
  </div>
);

export const AnalyzingContent = () => (
  <div className="mx-auto mt-6 flex h-[calc(70%)] w-[80%] flex-col rounded-t-2xl border border-neutral-500 mask-b-from-40 px-4 pt-8">
    {/* Step 1 — Count hours work */}
    <div className="relative overflow-visible">
      <div className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/6 p-[10px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-700">
          <BsClock className="text-white" size={18} />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm font-medium tracking-tight text-white">
            Count hours work
          </span>
          <div className="h-[3px] w-20 rounded-full bg-neutral-600" />
        </div>
      </div>
      <div className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 shadow-lg">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    <DashedConnector />

    {/* Step 2 — Add to CRM */}
    <div className="relative overflow-visible">
      <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.06] p-[10px]">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-700">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path
              d="M10 1H2C1.44772 1 1 1.44772 1 2V16C1 16.5523 1.44772 17 2 17H14C14.5523 17 15 16.5523 15 16V6L10 1Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1V6H15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm font-medium tracking-tight text-white">
            Add to CRM
          </span>
          <div className="h-[3px] w-20 rounded-full bg-neutral-600" />
        </div>
      </div>
      <div className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 shadow-lg">
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.5 11 8.84315 10.3284 9.77817 9.27817"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </div>

    <DashedConnector />

    {/* Step 3 — Send invoice */}
    <div className="relative overflow-visible">
      <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.06] p-[10px]">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-800">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="#666" strokeWidth="1.5" />
            <path
              d="M9 4V14"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6.5 6.5C6.5 5.67 7.5 5 9 5C10.5 5 11.5 5.67 11.5 6.75C11.5 8.25 9 9 9 9C9 9 6.5 9.75 6.5 11.25C6.5 12.33 7.5 13 9 13C10.5 13 11.5 12.33 11.5 11.5"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm font-medium tracking-tight text-neutral-500">
            Send invoice
          </span>
          <div className="h-[3px] w-20 rounded-full bg-neutral-700" />
        </div>
      </div>
      <div className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 shadow-lg">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1 1L7 7M7 1L1 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

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
        className="w-[3px] shrink-0 rounded-full bg-neutral-500"
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

export const SecondCard = () => (
  <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-4">
    <div className="mx-auto flex h-[180] w-[80%] items-center justify-center overflow-hidden">
      <WaveformBars />
      <div className="absolute z-10 flex h-60 items-center justify-center">
        <div className="h-fit w-fit rounded-full bg-neutral-950 p-4">
          <PiPhoneBold size={42} />
        </div>
      </div>
    </div>
    <p className="mt-5 text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">Voice Agents.</span> Let AI
      handle calls, inquiries, and follow-ups naturally and reliably every day.
    </p>
  </div>
);

const Solution = () => {
  return (
    <div className="flex h-fit flex-col items-center gap-2 pb-20">
      <InfoPill title="Our solutions" />
      <h1 className="max-w-xl text-center text-[46px] leading-none font-semibold tracking-tighter">
        AI Solutions That Help You Work Faster and Smarter
      </h1>

      <div className="mt-8 grid h-[95vh] w-full grid-cols-3 grid-rows-5 gap-2">
        <FirstCard />
        <SecondCard />
        <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>

        <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>
        <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>
        <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>
      </div>
    </div>
  );
};

export default Solution;
