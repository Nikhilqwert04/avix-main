"use client";
import { motion } from "framer-motion";
import {
  BsBarChart,
  BsBox,
  BsGear,
  BsGlobe,
  BsTelephone,
} from "react-icons/bs";
import Glow from "../../Glow";

const expenseCategories = [
  { name: "Marketing", amount: "$2450", pct: 62, Icon: BsBarChart },
  { name: "Supplies", amount: "$1110", pct: 34, Icon: BsBox },
  { name: "Freelance", amount: "$3750", pct: 90, Icon: BsGear },
  { name: "Training", amount: "$1680", pct: 46, Icon: BsGlobe },
  { name: "Support", amount: "$2190", pct: 58, Icon: BsTelephone },
  { name: "Software", amount: "$1870", pct: 50, Icon: BsBarChart },
  { name: "Travel", amount: "$980", pct: 26, Icon: BsGlobe },
  { name: "HR", amount: "$3100", pct: 78, Icon: BsGear },
  { name: "Legal", amount: "$4200", pct: 95, Icon: BsBox },
  { name: "Events", amount: "$1440", pct: 40, Icon: BsTelephone },
];

const ThirdCard = () => (
  <motion.div
    className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"
    initial={{ x: 48, y: -32, opacity: 0 }}
    whileInView={{ x: 0, y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.16 }}
  >
    <Glow className="-top-4 -left-7" width="20%" height="20%" opacity={0.3} />

    <div className="mt-10 ml-auto flex h-[calc(70%)] w-[90%] flex-col overflow-hidden rounded-tl-2xl border border-r-0 border-neutral-500 mask-b-from-40 px-4 pt-4">
      {/* Stats header */}
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase">
            Expense
          </p>
          <p className="text-2xl font-semibold tracking-tight text-white">
            $320,000
          </p>
        </div>
        <div className="mb-0.5 flex gap-5">
          <div>
            <p className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase">
              Paid
            </p>
            <p className="text-base font-semibold text-white">$120,000</p>
          </div>
          <div>
            <p className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase">
              Due
            </p>
            <p className="text-base font-semibold text-neutral-400">$200,000</p>
          </div>
        </div>
      </div>

      {/* Area chart */}
      <div className="-mx-4 shrink-0">
        <svg
          width="100%"
          height="76"
          viewBox="0 0 260 76"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#666" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#111" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0 76 L0 54 C18 54 28 32 48 36 C64 39 74 12 96 16 C116 20 126 50 146 44 C164 38 174 8 202 13 C222 17 240 40 260 33 L260 76 Z"
            fill="url(#areaGrad)"
          />
          <path
            d="M0 54 C18 54 28 32 48 36 C64 39 74 12 96 16 C116 20 126 50 146 44 C164 38 174 8 202 13 C222 17 240 40 260 33"
            fill="none"
            stroke="#555"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="mb-3 h-px w-full bg-neutral-800" />

      {/* Category rows — infinite scroll */}
      <div className="overflow-hidden" style={{ height: 186 }}>
        <motion.div
          className="flex flex-col gap-[9px]"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        >
          {[...expenseCategories, ...expenseCategories].map(
            ({ name, amount, pct, Icon }, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex h-fit w-fit shrink-0 items-center gap-1.5 rounded border border-white/8 bg-white/5 p-[0.4]">
                  <Icon size={11} className="shrink-0 text-neutral-400" />
                  <span className="truncate text-xs font-medium tracking-tight text-neutral-300">
                    {name}
                  </span>
                </div>
                <span className="w-12 shrink-0 text-xs font-medium text-neutral-400">
                  {amount}
                </span>
                <div className="h-[3px] flex-1 rounded-full bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-neutral-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>

    <p className="mt-2 max-w-sm px-4 text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">AI Data Analysis.</span> Turn
      complex data into clear, simple & easy practical insights you can easily
      act on.
    </p>
  </motion.div>
);

export default ThirdCard;
