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
      "https://i.pinimg.com/736x/ce/1c/b1/ce1cb1c471f0011d93dacc29ce85b37a.jpg",
  },
  {
    name: "Emma Brandt",
    role: "CPO, Stackline",
    quote:
      "Three agencies before Avix. None delivered. They took over, cleaned the codebase, and shipped v1 in under two months.",
    image:
      "https://i.pinimg.com/1200x/3b/11/41/3b1141a3657aadacbb9c659388131123.jpg",
  },
  {
    name: "Theo Nakamura",
    role: "CTO, Flowbase",
    quote:
      "They push back when something's wrong. You want a team with opinions — not order-takers who just nod.",
    image:
      "https://i.pinimg.com/1200x/16/61/70/1661707d7524042da1b13236e832b2b7.jpg",
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

      <div ref={ref} className="my-10 grid h-112.5 w-full grid-cols-3 gap-2.5">
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
