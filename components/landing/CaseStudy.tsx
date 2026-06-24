"use client";
import { useEffect, useRef, useState } from "react";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cases = [
  {
    bg: "https://i.pinimg.com/1200x/99/41/e4/9941e429916ea59b01b6c847fd755184.jpg",
    quote:
      "Cube really helped us to automate all of our manual process and saves us at least 10 hrs per week.",
  },
  {
    bg: "https://i.pinimg.com/1200x/ee/19/a7/ee19a7292d2dcaded602969615b3ff41.jpg",
    quote:
      "Our outreach conversion rate tripled within the first month. The AI handles every follow-up perfectly.",
  },
  {
    bg: "https://i.pinimg.com/736x/6d/30/e2/6d30e280e89480be891a16659ca1725f.jpg",
    quote:
      "We closed 40% more deals without hiring a single SDR. This is the future of sales automation.",
  },
  {
    bg: "https://i.pinimg.com/736x/96/15/1f/96151f90e2fa2c8c18c0cf6689244873.jpg",
    quote:
      "Scheduling, follow-ups, and CRM sync — all automated. My team now focuses purely on closing.",
  },
];

export const LogoCount = ({ link }: { link: string }) => {
  return (
    <div className="relative w-fit">
      <div className="relative flex w-16 items-center justify-center rounded-br-2xl bg-black p-2">
        <div className="absolute top-0 -right-4 z-99 rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
              fill="rgb(0, 0, 0)"
            />
          </svg>
        </div>
        <img
          src={link}
          alt="img"
          className="h-full w-full rounded-full object-contain"
        />
        <div className="absolute -bottom-4 left-0 h-fit w-fit scale-120 rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
              fill="rgb(0, 0, 0)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const NavButton = ({
  onPrev,
  onNext,
  current,
  total,
}: {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}) => {
  return (
    <div className="relative right-0 bottom-0 w-fit self-end">
      <div className="relative flex h-10 w-fit items-center gap-3 rounded-tl-2xl bg-black px-3 py-2">
        <div className="absolute bottom-0 -left-4 z-99 -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
              fill="rgb(0, 0, 0)"
            />
          </svg>
        </div>

        <span className="text-xs font-medium text-white tabular-nums select-none">
          {current + 1}/{total}
        </span>

        <div className="flex gap-2">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="text-white transition-colors hover:text-white/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="text-white transition-colors hover:text-white/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="absolute -top-4 right-0 h-fit w-fit scale-120 -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z"
              fill="rgb(0, 0, 0)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const slide = cases[current];

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(cases.length - 1, i + 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex h-fit flex-col items-center gap-2 pb-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <InfoPill title="Case study" />
      <MainHeading
        title="How Businesses Use Our AI to Scale Faster"
        className="max-w-md"
      />

      <div className="relative mt-10 flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-2xl">
        <div
          key={current}
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            transition: "background-image 0.4s ease",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <p className="absolute bottom-4 left-3 z-10 max-w-[380px] text-[24px] leading-[1.1] tracking-tighter text-white">
          {slide.quote}
        </p>

        <NavButton
          onPrev={prev}
          onNext={next}
          current={current}
          total={cases.length}
        />
      </div>
    </div>
  );
};

export default CaseStudy;
