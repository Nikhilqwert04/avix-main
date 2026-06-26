"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";
import { ChevronDown } from "lucide-react";
import Glow from "../Glow";

const faqs = [
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation streamlines repetitive tasks, reduces human error, and frees your team to focus on high-value work — resulting in faster turnaround and lower operational costs.",
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer:
      "Not at all. We handle the full integration process end-to-end, working with your existing tools and workflows so your team experiences minimal disruption.",
  },
  {
    question: "What industries can benefit from AI automation?",
    answer:
      "Virtually any industry — from e-commerce and finance to healthcare and logistics. If your business has repetitive processes or large amounts of data, AI can create value.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "No technical background is required. We build systems designed for non-technical users and provide full onboarding so your team can hit the ground running.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer dedicated ongoing support including monitoring, updates, and direct access to our team — so your automations keep running smoothly long after launch.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      variants={itemVariants}
      onClick={() => setOpen((prev) => !prev)}
      className="w-full rounded-2xl bg-[#1c1c1c] px-6 py-5 text-left transition-colors hover:bg-[#222] focus:outline-none"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-white">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-neutral-400">{answer}</p>
        </div>
      </div>
    </motion.button>
  );
}

export default function Faq() {
  return (
    <div className="mt-40 flex w-full items-start justify-between">
      <Glow
        width="50%"
        height="40%"
        blur={80}
        opacity={0.15}
        className="right-36 -z-99 -rotate-20"
      />

      <div className="flex h-full w-[30%] flex-col gap-2">
        <InfoPill title="FAQ" />
        <div className="flex flex-col">
          <MainHeading title="Frequently" className="text-start" />
          <MainHeading title="Asked Questions" className="text-start" />
        </div>
        <p className="font-semibold text-neutral-600">
          Got a specific question?{" "}
          <span className="text-white">Contact us</span>
        </p>
      </div>

      <motion.div
        className="flex w-[60%] flex-col gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </motion.div>
    </div>
  );
}
