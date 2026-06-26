"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Glow from "../../Glow";

const IMG =
  "https://i.pinimg.com/736x/da/cb/5b/dacb5bcaeee7c65e4cd13ce3f85837d5.jpg";

type Agent = { name: string; position: string; color: string; image: string };

export const ProfileCard = ({ name, position, color, image }: Agent) => (
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

const agentRow1: Agent[] = [
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

const agentRow2: Agent[] = [
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

const agentRow3: Agent[] = [
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

const FourthCard = () => (
  <motion.div
    className="relative row-span-2 w-[1fr] overflow-hidden rounded-2xl bg-linear-to-b from-[#232323] to-[#040404] p-5"
    initial={{ x: -48, y: 32, opacity: 0 }}
    whileInView={{ x: 0, y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0 }}
  >
    <Glow className="-top-4 -left-7" width="20%" height="20%" opacity={0.3} />

    <div className="flex flex-col gap-3 overflow-hidden mask-r-from-40 mask-l-from-40">
      <MarqueeRow agents={agentRow1} speed={20} reverse={false} />
      <MarqueeRow agents={agentRow2} speed={20} reverse={true} />
      <MarqueeRow agents={agentRow3} speed={20} reverse={false} />
    </div>

    <p className="mt-4 text-lg font-medium tracking-tighter text-neutral-400">
      <span className="font-semibold text-white">Internal Tools.</span> Replace
      the spreadsheets and workarounds with software your team actually wants to
      use.
    </p>
  </motion.div>
);

export default FourthCard;
