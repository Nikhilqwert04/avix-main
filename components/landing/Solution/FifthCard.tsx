"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsSearch, BsChevronUp } from "react-icons/bs";
import Glow from "../../Glow";

const Toggle = ({ on }: { on: boolean }) => (
  <div
    className={`relative flex h-3 w-5 shrink-0 items-center rounded-full ${on ? "bg-white" : "bg-neutral-700"}`}
  >
    <div
      className={`absolute h-2 w-2 rounded-full ${on ? "right-0.5 bg-neutral-900" : "left-0.5 bg-neutral-500"}`}
    />
  </div>
);

const outreachMethods: {
  svg: React.ReactNode;
  label: string;
  on: boolean;
  dot: boolean;
}[] = [
  {
    label: "Semantic search",
    on: true,
    dot: false,
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Recommendation engine",
    on: true,
    dot: false,
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Auto-tagging pipeline",
    on: false,
    dot: false,
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
      </svg>
    ),
  },
  {
    label: "Conversational assistant",
    on: false,
    dot: false,
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: "Voice interface",
    on: false,
    dot: true,
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    label: "Predictive analytics",
    on: false,
    dot: true,
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Custom LLM fine-tuning",
    on: false,
    dot: true,
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const FifthCard = () => (
  <motion.div
    className="relative row-auto min-h-[300px] w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-[20px] md:row-span-3 md:min-h-0"
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
  >
    <p className="text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">AI-Powered Products.</span> We
      integrate AI where it creates real value — not as a feature checkbox.
    </p>
    <Glow className="top-22 left-11" width="80%" height="20%" opacity={0.2} />

    <div className="mx-auto mt-8 flex h-[calc(72%)] w-[95%] flex-col overflow-hidden rounded-t-xl border border-neutral-600 mask-b-from-50">
      {/* macOS title bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-neutral-700 bg-neutral-900/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.989"
              height="11.988"
              fill="none"
              overflow="visible"
            >
              <path
                d="M 9.119 7.141 C 10.847 5.199 11.575 3.631 11.847 2.482 C 12.004 1.817 12.007 1.298 11.967 0.935 C 11.951 0.792 11.924 0.651 11.886 0.513 C 11.87 0.454 11.851 0.397 11.828 0.34 L 11.828 0.34 C 11.773 0.217 11.702 0.164 11.564 0.118 C 11.524 0.106 11.484 0.094 11.444 0.085 C 11.303 0.051 11.161 0.028 11.017 0.015 C 10.65 -0.018 10.125 -0.007 9.458 0.156 C 8.307 0.436 6.747 1.162 4.841 2.857 L 3.043 3.035 L 3.038 3.035 C 2.606 3.083 2.203 3.277 1.896 3.585 L 0.111 5.373 C -0.004 5.49 -0.033 5.667 0.04 5.815 C 0.114 5.962 0.273 6.046 0.436 6.023 L 1.857 5.82 C 2.067 5.79 2.3 5.83 2.572 5.919 C 2.746 5.976 2.9 6.039 3.063 6.105 L 3.215 6.167 C 3.362 6.779 3.71 7.351 4.171 7.812 C 4.63 8.272 5.202 8.621 5.813 8.769 L 5.874 8.92 C 5.941 9.084 6.004 9.238 6.061 9.413 C 6.149 9.685 6.189 9.919 6.159 10.129 L 5.956 11.553 C 5.934 11.716 6.018 11.874 6.165 11.948 C 6.312 12.021 6.489 11.993 6.606 11.877 L 8.391 10.089 C 8.698 9.782 8.892 9.378 8.94 8.946 Z M 9.201 4.37 C 8.604 4.969 7.755 5.09 7.307 4.641 C 6.859 4.191 6.98 3.342 7.577 2.743 C 8.175 2.145 9.024 2.024 9.472 2.473 C 9.92 2.922 9.799 3.771 9.202 4.37 Z"
                fill="rgb(255, 255, 255)"
              />
            </svg>
          </span>
          <span className="text-[12px] font-semibold text-white">
            AI Feature Suite
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-neutral-600" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Search / status bar */}
      <div className="shrink-0 px-4 pt-4 pb-3">
        <div className="flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-800/50 px-3 py-2.5">
          <BsSearch size={13} className="shrink-0 text-neutral-500" />
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="text-xs text-neutral-400">
              Scanning product requirements...
            </span>
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-neutral-700">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-neutral-300"
                animate={{ width: ["0%", "42%"] }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.6,
                }}
              />
              <motion.div
                className="absolute inset-y-0 rounded-full bg-white/40 blur-[2px]"
                animate={{ left: ["-10%", "42%"], width: ["4%", "8%", "4%"] }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.6,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outreaching Methods accordion */}
      <div className="mx-4 rounded-lg border border-neutral-600">
        <div className="mx-4 mt-3 mb-3 flex shrink-0 items-center justify-between rounded-lg">
          <span className="text-sm text-[12px] text-neutral-300">
            AI Modules..
          </span>
          <BsChevronUp size={13} className="text-neutral-400" />
        </div>

        <hr className="mx-auto w-[90%] text-neutral-600" />

        <div className="flex flex-col gap-0 px-4">
          {outreachMethods.map(({ svg, label, on, dot }) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-neutral-800 py-2.5 last:border-0"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`"text-[12px]"${dot ? "text-neutral-600" : "text-neutral-400"}`}
                >
                  {svg}
                </span>
                <span
                  className={`text-[12px] ${dot ? "text-neutral-600" : "text-neutral-300"}`}
                >
                  {label}
                </span>
              </div>
              {dot ? (
                <div className="h-3 w-3 rounded-full bg-neutral-700" />
              ) : (
                <Toggle on={on} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default FifthCard;
