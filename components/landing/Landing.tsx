import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="relative m-8 flex h-full min-w-[94vw] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-linear-to-b from-neutral-900 via-black to-neutral-900">
      <div className="flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 pr-2 text-sm">
        <span className="rounded-full bg-blue-600 px-1 py-0.5 text-white">
          New
        </span>{" "}
        Custom Ai Agents
      </div>
      <div className="text-center leading-[70px] font-semibold">
        <h1 className="text-[80px] tracking-tighter">
          We Make AI Work for You
        </h1>
        <h1 className="text-[80px] tracking-tighter">Not Against You.</h1>
      </div>
      <span className="max-w-md text-center text-neutral-500">
        We design AI systems that save time, cut costs, and make your business
        run smoother — without the complexity.
      </span>
      <div className="flex items-center gap-2">
        <Link
          className="rounded-full bg-neutral-100 px-5 py-2 font-semibold text-neutral-950 transition-colors duration-200 ease-in hover:bg-neutral-300"
          href={"#"}
        >
          Book a call
        </Link>
        <Link
          className="rounded-full bg-neutral-800 px-4 py-2 font-semibold text-neutral-50"
          href={"#"}
        >
          View services
        </Link>
      </div>
    </div>
  );
};

export default Landing;
