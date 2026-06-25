"use client";
import InfoPill from "@/components/ui/InfoPill";
import MainHeading from "@/components/ui/MainHeading";
import {
  FaHourglass,
  FaLightbulb,
  FaCrosshairs,
  FaChartBar,
} from "react-icons/fa";
import { MdFastForward, MdMonetizationOn } from "react-icons/md";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fromLeft = (delay = 0) => ({
  initial: { x: -48, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease, delay },
});

const fromRight = (delay = 0) => ({
  initial: { x: 48, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease, delay },
});

const fromBottom = (delay = 0) => ({
  initial: { y: 48, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease, delay },
});

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 text-white">
    {children}
  </div>
);

const CardContent = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex h-full flex-col gap-2 p-4">
    <IconBox>{icon}</IconBox>
    <div>
      <p className="text-lg font-bold text-white">{title}</p>
      <p className="text-md mt-0.5 max-w-[120px] leading-snug text-neutral-400">
        {description}
      </p>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <div className="my-10 flex h-fit flex-col gap-2 pb-20">
      <InfoPill title="Benefits" />
      <MainHeading
        title="What Makes Our AI Better for Your Business"
        className="max-w-lg text-start"
      />

      <div className="mt-10 grid h-[370px] grid-cols-5 grid-rows-[60px_1fr_1fr] gap-2">
        {/* col-1 row-3: Time Saving — from left */}
        <motion.div
          className="col-start-1 row-start-3 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromLeft(0)}
        >
          <CardContent
            icon={<FaHourglass size={14} />}
            title="Time saving."
            description="Automate tasks instantly."
          />
        </motion.div>

        {/* col-2 row-3: Faster Workflows — from left */}
        <motion.div
          className="col-start-2 row-start-3 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromLeft(0.1)}
        >
          <CardContent
            icon={<MdFastForward size={16} />}
            title="Faster Workflows."
            description="Speed up your operations."
          />
        </motion.div>

        {/* col-2 row-2: Cost Efficient — from left */}
        <motion.div
          className="col-start-2 row-start-2 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromLeft(0.05)}
        >
          <CardContent
            icon={<MdMonetizationOn size={16} />}
            title="Cost Efficient."
            description="Reduce manual workload."
          />
        </motion.div>

        {/* col-3 rows-1-4: Center logo card — from bottom */}
        <motion.div
          className="relative col-start-3 row-start-1 row-end-4 flex justify-center rounded-2xl border border-neutral-700 bg-linear-to-tr from-black via-black/80 to-neutral-700 mask-b-from-30 pt-10"
          {...fromBottom(0)}
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 65%)",
            }}
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-700 bg-black shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.958"
              height="24.991"
              fill="none"
              overflow="visible"
            >
              <g>
                <path
                  d="M 21.12 22.771 C 26.27 17.529 26.232 9.117 21.036 3.921 C 15.84 -1.275 7.428 -1.311 2.187 3.838 L 6.605 8.256 C 7.302 8.953 8.427 8.918 9.315 8.488 C 11.368 7.49 13.828 7.903 15.442 9.517 C 17.056 11.132 17.469 13.592 16.471 15.645 C 16.04 16.532 16.005 17.657 16.702 18.354 L 21.12 22.771 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
                <path
                  d="M 18.743 24.991 L 12.189 24.991 C 11.242 24.991 10.335 24.614 9.665 23.945 L 1.045 15.326 C 0.376 14.657 0 13.748 0 12.801 L 0 6.248 Z M 6.694 24.991 L 2.678 24.991 C 1.199 24.991 0 23.792 0 22.313 L 0 18.297 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* col-4 row-2: Better Insights — from right */}
        <motion.div
          className="col-start-4 row-start-2 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromRight(0.05)}
        >
          <CardContent
            icon={<FaLightbulb size={14} />}
            title="Better Insights."
            description="Understand data quickly."
          />
        </motion.div>

        {/* col-4 row-3: Higher Accuracy — from right */}
        <motion.div
          className="col-start-4 row-start-3 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromRight(0.1)}
        >
          <CardContent
            icon={<FaCrosshairs size={14} />}
            title="Higher Accuracy."
            description="Minimize human errors."
          />
        </motion.div>

        {/* col-5 row-3: Easy Scaling — from right */}
        <motion.div
          className="col-start-5 row-start-3 rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700"
          {...fromRight(0)}
        >
          <CardContent
            icon={<FaChartBar size={14} />}
            title="Easy Scaling."
            description="Grow without extra effort."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
