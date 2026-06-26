"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";
import { ChevronDown } from "lucide-react";
import Glow from "../Glow";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs ship in 6–8 weeks from kickoff. Larger builds are scoped after a proper discovery session — you'll always have a realistic timeline before work starts, not buried in a contract after it does.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We work with founders from the idea stage through Series A and beyond. We've helped close funding rounds with MVPs, rebuilt platforms mid-growth, and scaled infrastructure that was never designed to handle what it was handling.",
  },
  {
    question: "Who owns the code when we're done?",
    answer:
      "You do. Entirely. Full IP and full codebase ownership from day one — no license fees, no lock-in, no strings attached. We're building your product, not holding it hostage.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Primarily TypeScript, React, Next.js, Node.js, and PostgreSQL — modern, battle-tested, and easy to hire around when you scale your own team. If you have an existing stack or a technical requirement, we'll work within it.",
  },
  {
    question: "What happens after we launch?",
    answer:
      "Every engagement includes post-launch support. Many clients move into our Growth Partnership after their MVP — we become the ongoing engineering team without the overhead, HR, and management cost of building one in-house.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
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
    <div className="mt-20 flex w-full flex-col items-start justify-between gap-8 md:mt-40 md:flex-row md:gap-0">
      <Glow
        width="50%"
        height="40%"
        blur={80}
        opacity={0.15}
        className="right-36 -z-99 -rotate-20"
      />

      <div className="flex h-full w-full flex-col gap-2 md:w-[30%]">
        <InfoPill title="FAQ" />
        <div className="flex flex-col">
          <MainHeading title="Common" className="text-start" />
          <MainHeading title="Questions" className="text-start" />
        </div>
        <p className="font-semibold text-neutral-600">
          Something else? <span className="text-white">Contact us</span>
        </p>
      </div>

      <motion.div
        className="flex w-full flex-col gap-3 md:w-[60%]"
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
