"use client";
import { useRef } from "react";
import { Star, Zap } from "lucide-react";
import { GiCrown } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";

const cardVariants = [
  {
    hidden: { opacity: 0, x: -48, y: 48 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0 },
    },
  },
  {
    hidden: { opacity: 0, x: 0, y: 48 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.15 },
    },
  },
  {
    hidden: { opacity: 0, x: 48, y: 48 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.3 },
    },
  },
];

const plans = [
  {
    icon: <Star size={16} className="fill-blue-500 text-blue-500" />,
    label: "Starter",
    labelColor: "text-white",
    title: "Build & Done",
    description:
      "A fully built AI automation system delivered once — no recurring fees, yours to keep.",
    buttonStyle: "bg-neutral-800 text-white hover:bg-neutral-700",
    features: [
      "Custom workflow automation",
      "Chatbot integration",
      "Data pipeline setup",
      "Email + chat outreach",
      "Up to 3 integrations",
      "Handoff & documentation",
    ],
    popular: false,
  },
  {
    icon: <Zap size={16} className="fill-green-400 text-green-400" />,
    label: "Professional",
    labelColor: "text-green-400",
    title: "Monthly Maintenance",
    description:
      "We build, monitor, and maintain your AI systems for a full month — hands-free growth.",
    buttonStyle: "bg-white text-black hover:bg-neutral-100",
    features: [
      "Advanced automations",
      "Custom chatbots",
      "Deep data analytics",
      "Multi-channel outreach",
      "Up to 10 integrations",
      "Priority support",
    ],
    popular: true,
  },
  {
    icon: <GiCrown size={18} className="text-amber-500" />,
    label: "Elite",
    labelColor: "text-white",
    title: "Custom Plan",
    description:
      "Perfect for agencies and teams needing full strategic control and ongoing partnership.",
    buttonStyle: "bg-neutral-800 text-white hover:bg-neutral-700",
    features: [
      "Unlimited automations",
      "Custom AI agents",
      "Real-time analytics",
      "Full marketing suite",
      "Unlimited integrations",
      "Dedicated support lead",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="mt-10 flex flex-col gap-2">
      <InfoPill title="Pricing" />
      <MainHeading
        title="Flexible Pricing for Every Business"
        className="text-start"
      />

      <div ref={ref} className="my-10 grid h-113.5 w-full grid-cols-3 gap-2.5">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            variants={cardVariants[i]}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex flex-col justify-between rounded-2xl border border-neutral-900 bg-linear-to-tr from-black via-black/80 to-neutral-700 p-7"
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 rounded-full bg-neutral-700 px-3 py-1 text-xs font-semibold text-white">
                Popular
              </span>
            )}
            <div className="flex flex-col gap-4">
              <div
                className={`flex items-center gap-2 text-sm font-medium ${plan.labelColor}`}
              >
                {plan.icon}
                <span>{plan.label}</span>
              </div>
              <span className="text-2xl leading-tight font-bold text-white">
                {plan.title}
              </span>
              <p className="text-sm leading-relaxed text-neutral-400">
                {plan.description}
              </p>
              <button
                className={`w-full cursor-pointer rounded-full py-3 text-sm font-medium transition-colors ${plan.buttonStyle}`}
              >
                Schedule a call
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm font-bold text-white">Features Included:</p>
              <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-neutral-400">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
