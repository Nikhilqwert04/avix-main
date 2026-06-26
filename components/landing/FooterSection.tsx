"use client";

import Link from "next/link";
import { useState } from "react";
import Glow from "@/components/Glow";

const LogoPill = () => (
  <div className="relative left-20">
    <div className="absolute left-[88px] rotate-90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
      >
        <path d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z" fill="rgb(0,0,0)" />
      </svg>
    </div>
    <div className="flex w-23 items-center gap-4 rounded-b-2xl bg-black px-3 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        overflow="visible"
      >
        <g>
          <path
            d="M 21.12 22.771 C 26.27 17.529 26.232 9.117 21.036 3.921 C 15.84 -1.275 7.428 -1.311 2.187 3.838 L 6.605 8.256 C 7.302 8.953 8.427 8.918 9.315 8.488 C 11.368 7.49 13.828 7.903 15.442 9.517 C 17.056 11.132 17.469 13.592 16.471 15.645 C 16.04 16.532 16.005 17.657 16.702 18.354 L 21.12 22.771 Z"
            fill="white"
          />
          <path
            d="M 18.743 24.991 L 12.189 24.991 C 11.242 24.991 10.335 24.614 9.665 23.945 L 1.045 15.326 C 0.376 14.657 0 13.748 0 12.801 L 0 6.248 Z M 6.694 24.991 L 2.678 24.991 C 1.199 24.991 0 23.792 0 22.313 L 0 18.297 Z"
            fill="white"
          />
        </g>
      </svg>
      <span className="pt-2 text-sm font-semibold text-white">Avix</span>
    </div>

    <div className="absolute top-0 -left-4 rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
      >
        <path d="M 0 18 L 18 18 C 8.059 18 0 9.941 0 0 Z" fill="rgb(0,0,0)" />
      </svg>
    </div>
  </div>
);

export default function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-6 md:px-0">
      <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-[#232323] to-[#040404]">
        <Glow className="top-3 left-11" width="60%" height="25%" />

        <LogoPill />

        {/* Main content */}
        <div className="flex flex-col gap-10 px-6 pt-8 pb-10 md:flex-row md:items-start md:justify-between md:gap-0 md:px-10">
          {/* Left: tagline + newsletter */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[30px] leading-tight font-bold tracking-tight">
              Product Engineering
              <br />
              Done Right.
            </h2>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-neutral-300">
                Stay in the loop
              </p>
              <div className="relative flex items-center gap-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-52 rounded-full border border-neutral-700 bg-neutral-800/60 px-4 py-2 text-sm text-white outline-none placeholder:text-neutral-500"
                />
                <button className="absolute right-0 -ml-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-neutral-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="flex gap-12 pt-2 sm:gap-20">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Pages</p>
              {["Home", "Work", "Services", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Socials</p>
              {["LinkedIn", "X", "GitHub", "Dribbble"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-neutral-800 px-6 py-4 text-center md:flex-row md:justify-between md:gap-0 md:px-10 md:text-left">
          <p className="text-xs text-neutral-500">
            © 2025 Avix. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-neutral-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-neutral-500 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
