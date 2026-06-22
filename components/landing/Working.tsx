"use client";

import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import Glow from "@/components/Glow";

export const StepCount = ({ step }: { step: string }) => {
  return (
    <div className="relative">
      <div className="absolute left-15 rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path
            d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
            fill="rgb(0, 0, 0)"
          ></path>
        </svg>
      </div>
      <span className="rounded-br-2xl bg-black p-2 text-sm">{step}</span>
      <div className="absolute top-7 h-fit w-fit rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path
            d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
            fill="rgb(0, 0, 0)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export const AnalyzingContent = () => (
  <div className="absolute m-4 w-[90%] rounded-xl bg-linear-to-b from-white/30 to-transparent mask-b-from-0 p-px">
    <div className="rounded-[11px] bg-neutral-900 p-4">
      <span className="t font-medium">Analyzing Workflow</span>
      <p className="text-[12px] text-neutral-300">
        To get an idea of what can be automated
      </p>

      <hr className="my-4 text-neutral-500" />

      <div className="flex h-full w-full flex-col gap-3">
        <div className="flex h-fit w-full items-center gap-2">
          <div className="h-fit w-fit rounded-full border border-neutral-700 bg-neutral-800 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.326"
              height="15.267"
              fill="none"
              overflow="visible"
            >
              <g>
                <path
                  d="M 3.114 6.284 L 1.216 8.182 C -0.405 9.803 -0.405 12.431 1.216 14.052 C 2.837 15.673 5.465 15.673 7.086 14.052 L 9.615 11.521 C 10.567 10.569 10.998 9.213 10.77 7.885 C 10.543 6.558 9.685 5.423 8.469 4.842 L 7.658 5.653 C 7.576 5.735 7.504 5.828 7.445 5.928 C 8.387 6.199 9.115 6.947 9.36 7.896 C 9.605 8.845 9.33 9.852 8.636 10.545 L 6.109 13.074 C 5.028 14.155 3.275 14.155 2.194 13.074 C 1.113 11.992 1.113 10.24 2.194 9.158 L 3.291 8.063 C 3.136 7.483 3.076 6.881 3.114 6.282 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
                <path
                  d="M 5.712 3.745 C 4.759 4.697 4.328 6.053 4.556 7.381 C 4.784 8.708 5.642 9.843 6.857 10.424 L 7.929 9.35 C 6.975 9.094 6.229 8.348 5.973 7.394 C 5.718 6.439 5.991 5.42 6.69 4.721 L 9.217 2.192 C 10.298 1.111 12.051 1.111 13.132 2.192 C 14.214 3.274 14.214 5.026 13.132 6.108 L 12.035 7.203 C 12.19 7.784 12.25 8.386 12.212 8.984 L 14.111 7.086 C 15.731 5.465 15.731 2.837 14.111 1.216 C 12.49 -0.405 9.862 -0.405 8.241 1.216 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-500">Bottlenecks</span>
            <span className="tracking-tighter">15+ issues found</span>
          </div>
        </div>

        <div className="flex h-fit w-full items-start gap-2">
          <div className="flex size-fit items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800 p-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.067"
              height="14.044"
              fill="none"
              overflow="visible"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <g>
                <path
                  d="M 13.171 5.811 L 17.774 5.811 C 17.887 5.811 17.991 5.877 18.039 5.979 C 18.087 6.082 18.071 6.204 17.999 6.291 L 15.697 9.054 C 15.641 9.121 15.559 9.159 15.472 9.159 C 15.385 9.159 15.303 9.121 15.248 9.054 L 12.946 6.291 C 12.873 6.204 12.858 6.082 12.906 5.979 C 12.954 5.877 13.057 5.811 13.171 5.811 M 0.293 8.152 L 4.896 8.152 C 5.009 8.152 5.113 8.087 5.161 7.984 C 5.209 7.881 5.193 7.76 5.121 7.672 L 2.819 4.909 C 2.763 4.843 2.681 4.804 2.594 4.804 C 2.507 4.804 2.425 4.843 2.369 4.909 L 0.068 7.672 C -0.005 7.76 -0.021 7.881 0.028 7.984 C 0.076 8.087 0.179 8.152 0.293 8.152"
                  fill="rgb(255, 255, 255)"
                ></path>
                <path
                  d="M 8.946 1.168 C 11.728 1.168 14.126 3.126 14.682 5.851 L 15.873 5.851 C 15.413 3.141 13.415 0.948 10.759 0.238 C 8.104 -0.471 5.278 0.433 3.528 2.552 C 3.386 2.713 3.344 2.937 3.416 3.138 C 3.489 3.339 3.665 3.485 3.876 3.518 C 4.087 3.551 4.3 3.466 4.43 3.297 C 5.504 1.996 7.129 1.168 8.946 1.168 Z M 2.019 8.193 C 2.478 10.903 4.476 13.096 7.132 13.806 C 9.788 14.515 12.613 13.611 14.364 11.492 C 14.505 11.332 14.548 11.107 14.475 10.906 C 14.403 10.705 14.226 10.56 14.015 10.527 C 13.804 10.494 13.592 10.578 13.461 10.747 C 12.025 12.486 9.718 13.246 7.53 12.7 C 5.342 12.155 3.662 10.402 3.209 8.193 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
            </motion.svg>
          </div>

          <div className="flex w-full flex-col gap-1">
            <span className="tracking-tighter">85% repeated tasks</span>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-neutral-700">
              <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-white to-neutral-400" />
            </div>
          </div>
        </div>

        <div className="flex h-fit w-full items-center gap-2">
          <div className="h-fit w-fit rounded-full border border-neutral-700 bg-neutral-800 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14.931"
              fill="none"
              overflow="visible"
            >
              <path
                d="M 16 7 C 16 10.866 12.418 14 8 14 C 7.208 14.002 6.418 13.899 5.653 13.694 C 5.069 13.99 3.728 14.558 1.472 14.928 C 1.272 14.96 1.12 14.752 1.199 14.566 C 1.553 13.73 1.873 12.616 1.969 11.6 C 0.744 10.37 0 8.76 0 7 C 0 3.134 3.582 0 8 0 C 12.418 0 16 3.134 16 7 M 5 7 C 5 6.448 4.552 6 4 6 C 3.448 6 3 6.448 3 7 C 3 7.552 3.448 8 4 8 C 4.552 8 5 7.552 5 7 M 9 7 C 9 6.448 8.552 6 8 6 C 7.448 6 7 6.448 7 7 C 7 7.552 7.448 8 8 8 C 8.552 8 9 7.552 9 7 M 12 8 C 12.552 8 13 7.552 13 7 C 13 6.448 12.552 6 12 6 C 11.448 6 11 6.448 11 7 C 11 7.552 11.448 8 12 8"
                fill="rgb(255, 255, 255)"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-500">
              Communication Gaps
            </span>
            <span className="tracking-tighter">Needs to be automated</span>
          </div>
        </div>

        <div className="flex h-fit w-full items-start gap-2">
          <div className="h-fit w-fit rounded-full border border-neutral-700 bg-neutral-800 p-2">
            <BsClock />
          </div>
          <div className="flex w-full flex-col gap-1">
            <span className="tracking-tighter">Time consumption</span>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-neutral-700">
              <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-white to-neutral-400" />
            </div>
          </div>
        </div>

        <div className="flex h-fit w-full items-center gap-2">
          <div className="h-fit w-fit rounded-full border border-neutral-700 bg-neutral-800 p-2">
            <BiCalendar />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-500">
              Missed Deadlines
            </span>
            <span className="tracking-tighter">30% Missed Deadlines</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Working() {
  return (
    <div className="mx-40 mt-10 flex flex-col gap-2 pb-24">
      <span className="w-fit rounded-full border border-neutral-800 bg-neutral-900 px-2 py-1 text-sm">
        How it works
      </span>
      <h1 className="max-w-md text-[46px] leading-[1.2] font-semibold tracking-tighter">
        How we help you get real results with AI
      </h1>

      <div className="mt-5 grid h-[458.5px] w-full grid-cols-3 gap-[20px]">
        <div className="relative w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#0F0F0F]">
          <Glow className="top-3 left-11" width="80%" height="20%" />
          <StepCount step="Step 1." />
          <AnalyzingContent />
          <div className="absolute bottom-4 ml-5">
            <h1 className="text-[20px] font-semibold">Analyzing workflow</h1>
            <p className="text-neutral-500">
              We find where AI can save you time and boost efficiency.
            </p>
          </div>
        </div>
        <div className="relative w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#0F0F0F]">
          <Glow className="top-3 left-11" width="80%" height="20%" />
          <StepCount step="Step 2." />
          <AnalyzingContent />
          <div className="absolute bottom-4 ml-5">
            <h1 className="text-[20px] font-semibold">Integrating Solutions</h1>
            <p className="text-neutral-500">
              We connect smart AI tools into your existing systems.
            </p>
          </div>
        </div>
        <div className="relative w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#0F0F0F]">
          <Glow className="top-3 left-11" width="80%" height="20%" />
          <StepCount step="Step 3." />
          <AnalyzingContent />
          <div className="absolute bottom-4 ml-5">
            <h1 className="text-[20px] font-semibold">Regular Maintenance</h1>
            <p className="text-neutral-500">
              We keep your AI running smooth and always up to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
