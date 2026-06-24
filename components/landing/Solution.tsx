"use client";
import InfoPill from "../ui/InfoPill";
import Glow from "../Glow";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import {
  BsClock,
  BsBarChart,
  BsBox,
  BsGear,
  BsGlobe,
  BsTelephone,
} from "react-icons/bs";
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
  <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-[20px]">
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

export const SecondCard = () => (
  <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-4">
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
      <span className="font-semibold text-white">Voice Agents.</span> Let AI
      handle calls, inquiries, and follow-ups naturally and reliably every day.
    </p>
  </div>
);

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

export const ThirdCard = () => (
  <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]">
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
  </div>
);

export const ProfileCard = ({
  name,
  position,
  color,
  image,
}: {
  name: string;
  position: string;
  color: string;
  image: string;
}) => (
  <div className="flex w-[220px] shrink-0 items-center justify-between gap-2 rounded-lg border border-neutral-700 bg-white/[0.03] px-2.5 py-2">
    <div className="flex items-center gap-2 overflow-hidden">
      <div className="size-8 shrink-0 overflow-hidden rounded-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-col">
        <h1 className="truncate text-[12px] font-medium text-white">{name}</h1>
        <p className="truncate text-[10px] text-neutral-500">{position}</p>
      </div>
    </div>
    <div className={`size-2 shrink-0 rounded-full ${color}`} />
  </div>
);

const IMG =
  "https://i.pinimg.com/736x/da/cb/5b/dacb5bcaeee7c65e4cd13ce3f85837d5.jpg";

const agentRow1 = [
  {
    name: "Calista",
    position: "Customer Support",
    color: "bg-red-500",
    image: IMG,
  },
  {
    name: "Marcus",
    position: "Sales Manager",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/1200x/a0/28/1f/a0281ff36fee13410737387c95c93a97.jpg",
  },
  {
    name: "Priya",
    position: "Content Strategist",
    color: "bg-blue-500",
    image:
      "https://i.pinimg.com/736x/ba/1b/28/ba1b284216afd1e216ded260efefdefa.jpg",
  },
  {
    name: "Owen",
    position: "Marketing Lead",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/736x/c6/62/0c/c6620c761ef2000160553ec25c6ec83e.jpg",
  },
];
const agentRow2 = [
  {
    name: "Jordan",
    position: "Data Analyst",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/736x/96/ce/c5/96cec50e4f2b438bd15733077ba7de57.jpg",
  },
  {
    name: "Sofia",
    position: "UX Designer",
    color: "bg-red-500",
    image:
      "https://i.pinimg.com/1200x/18/30/e3/1830e383eb7519909b19d00ef5955d0e.jpg",
  },
  {
    name: "Ethan",
    position: "DevOps Engineer",
    color: "bg-blue-500",
    image:
      "https://i.pinimg.com/736x/ba/aa/8b/baaa8b7574bcf30c1892e541fec977c7.jpg",
  },
  {
    name: "Naomi",
    position: "HR Specialist",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/736x/b4/4a/46/b44a46d98b0401d4dff4e4edd128b190.jpg",
  },
];
const agentRow3 = [
  {
    name: "Zara",
    position: "Product Manager",
    color: "bg-blue-500",
    image:
      "https://i.pinimg.com/1200x/dd/f5/6f/ddf56f5686e2957e7cc7cf17afee336c.jpg",
  },
  {
    name: "Felix",
    position: "Brand Designer",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/736x/88/49/61/88496169f9c719e5ca0885f54612365f.jpg",
  },
  {
    name: "Imara",
    position: "SEO Specialist",
    color: "bg-red-500",
    image:
      "https://i.pinimg.com/736x/8a/51/83/8a5183de54291302e6546cd6056227b1.jpg",
  },
  {
    name: "Leo",
    position: "Copywriter",
    color: "bg-green-500",
    image:
      "https://i.pinimg.com/736x/e9/21/fc/e921fc70b478b74a04190594c212ed3e.jpg",
  },
];

type Agent = { name: string; position: string; color: string; image: string };

const MarqueeRow = ({
  agents,
  speed,
  reverse,
}: {
  agents: Agent[];
  speed: number;
  reverse: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!ref.current) return;
    const halfW = ref.current.scrollWidth / 2;
    const dir = reverse ? 1 : -1;
    let next = x.get() + dir * speed * (delta / 1000);
    if (!reverse && next <= -halfW) next += halfW;
    if (reverse && next >= 0) next -= halfW;
    x.set(next);
  });

  return (
    <div className="overflow-hidden">
      <motion.div ref={ref} style={{ x }} className="flex w-max gap-3">
        {[...agents, ...agents].map((agent, i) => (
          <ProfileCard key={i} {...agent} />
        ))}
      </motion.div>
    </div>
  );
};

export const FourthCard = () => (
  <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-5">
    <Glow className="-top-4 -left-7" width="20%" height="20%" opacity={0.3} />

    <div className="flex flex-col gap-3 overflow-hidden mask-r-from-40 mask-l-from-40">
      <MarqueeRow agents={agentRow1} speed={20} reverse={false} />
      <MarqueeRow agents={agentRow2} speed={20} reverse={true} />
      <MarqueeRow agents={agentRow3} speed={20} reverse={false} />
    </div>

    <p className="mt-4 text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">Custom AI Agents.</span> Build
      advanced AI systems that think and act intelligently for your business
      needs.
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

      <div className="mt-8 grid h-screen w-full grid-cols-3 grid-rows-5 gap-5">
        <FirstCard />
        <SecondCard />
        <ThirdCard />

        <div className="relative row-span-3 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>
        <FourthCard />
        <div className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404]"></div>
      </div>
    </div>
  );
};

export default Solution;
