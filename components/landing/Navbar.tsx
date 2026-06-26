"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SiStripe,
  SiVercel,
  SiSupabase,
  SiLinear,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const companies = [
  { name: "Stripe", icon: SiStripe },
  { name: "Vercel", icon: SiVercel },
  { name: "Supabase", icon: SiSupabase },
  { name: "Linear", icon: SiLinear },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub", icon: SiGithub },
];

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#" },
];

const rightLinks = [
  { label: "Services", href: "#" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute top-0 left-1/2 z-99 hidden -translate-x-1/2 transition-transform duration-300 ease-in-out sm:block ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative">
        {/* Shape */}
        <div className="flex items-start">
          {/* Left Curve */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="50"
            fill="none"
            overflow="visible"
            className="shrink-0"
          >
            <path d="M 0 0 C 45.98 0 37 50 87 50 L 87 0 Z" fill="black" />
          </svg>

          {/* Center */}
          <div className="h-[50px] w-[420px] shrink-0 bg-black" />

          {/* Right Curve */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="50"
            fill="none"
            overflow="visible"
            className="shrink-0"
          >
            <path d="M 87 0 C 41.02 0 50 50 0 50 L 0 0 Z" fill="black" />
          </svg>
        </div>

        {/* Logo — pinned to center */}
        <div className="pointer-events-none absolute top-0 left-1/2 flex h-[50px] -translate-x-1/2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
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
        </div>

        {/* Links — always visible */}
        <div className="absolute inset-0 flex h-[50px] items-center justify-center gap-8 px-10">
          {leftLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          {/* Spacer keeps links symmetric around logo */}
          <div className="w-[22px] shrink-0" />

          {rightLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="absolute bottom-1 left-1/2 z-99 mt-10 hidden w-fit -translate-x-1/2 sm:block">
      <div className="relative rotate-180">
        {/* Background shape */}
        <div className="flex items-start">
          {/* Left Curve */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="50"
            fill="none"
            overflow="visible"
            className="shrink-0"
          >
            <path
              d="M 0 0 C 45.98 0 37 50 87 50 L 87 0 Z"
              fill="rgb(0, 0, 0)"
            />
          </svg>

          {/* Center Black Tab */}
          <div className="h-[50px] w-[420px] shrink-0 bg-black" />

          {/* Right Curve */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="50"
            fill="none"
            overflow="visible"
            className="shrink-0"
          >
            <path d="M 87 0 C 41.02 0 50 50 0 50 L 0 0 Z" fill="rgb(0, 0, 0)" />
          </svg>
        </div>
      </div>

      {/* infinite marquee of trust logos */}
      <div
        className="absolute inset-x-[87px] top-[7px] flex h-[36px] items-center justify-center overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maxWidth: "420px",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              {companies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-neutral-100"
                >
                  <Icon size={18} />
                  <span className="text-base font-medium tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
