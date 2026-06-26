"use client";
import { useRef } from "react";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" as const, delay: i * 0.3 },
  }),
};

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl">
      <div className="flex h-112.5 flex-col justify-between p-2">
        <div className="flex items-center justify-between p-2">
          <div>
            <h1>{name}</h1>
            <p className="text-[10px]">{role}</p>
          </div>
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="white" stroke="white" />
            ))}
          </div>
        </div>
        <div className="max-w-70 text-sm font-semibold">{quote}</div>
      </div>
      <div className="absolute top-0 -z-99">
        <img className="-z-9 h-fit w-fit" src={image} alt={name} />
      </div>
    </div>
  );
}

const testimonials: TestimonialCardProps[] = [
  {
    name: "Rajan Mehta",
    role: "Founder, Cortex Labs",
    quote:
      "Avix shipped our MVP in six weeks — a real product, not a prototype. We used it to close our seed round.",
    image:
      "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emma Brandt",
    role: "CPO, Stackline",
    quote:
      "Three agencies before Avix. None delivered. They took over, cleaned the codebase, and shipped v1 in under two months.",
    image:
      "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Theo Nakamura",
    role: "CTO, Flowbase",
    quote:
      "They push back when something's wrong. You want a team with opinions — not order-takers who just nod.",
    image:
      "https://images.unsplash.com/photo-1745434159123-5b99b94206ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Testemonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="flex flex-col gap-2">
      <InfoPill title="Testimonials" />
      <div>
        <MainHeading title="Clients Who" className="text-start" />
        <MainHeading title="Don't Settle" className="text-start" />
      </div>

      <div
        ref={ref}
        className="my-10 grid h-auto w-full grid-cols-1 gap-2.5 md:h-112.5 md:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="h-full"
          >
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
