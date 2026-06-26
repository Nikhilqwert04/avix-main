"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
];

const rightLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ease = [0, 0, 0.2, 1] as const;

const StickyNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 z-[100] hidden -translate-x-1/2 transition-transform duration-300 ease-in-out sm:block ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Expanding shape */}
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

          {/* Center — collapses to logo width, expands on hover */}
          <motion.div
            className="h-[50px] shrink-0 bg-black"
            animate={{ width: hovered ? 420 : 66 }}
            transition={{ duration: 0.32, ease }}
          />

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

        {/* Logo — always visible, pinned to center */}
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

        {/* Links — 3D fold-in from top edge */}
        <div
          className="absolute inset-0 flex h-[50px] items-center justify-center gap-8 px-10"
          style={{ perspective: "400px" }}
        >
          <AnimatePresence>
            {hovered &&
              leftLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, rotateX: -90, y: -6 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    rotateX: -70,
                    y: -4,
                    transition: { duration: 0.12 },
                  }}
                  transition={{ duration: 0.24, delay: i * 0.07 + 0.14, ease }}
                  style={{
                    transformOrigin: "50% 0%",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Link
                    href={link.href}
                    className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Spacer keeps links symmetric around logo */}
          <div className="w-[22px] shrink-0" />

          <AnimatePresence>
            {hovered &&
              rightLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, rotateX: -90, y: -6 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    rotateX: -70,
                    y: -4,
                    transition: { duration: 0.12 },
                  }}
                  transition={{
                    duration: 0.24,
                    delay: (i + 2) * 0.07 + 0.14,
                    ease,
                  }}
                  style={{
                    transformOrigin: "50% 0%",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Link
                    href={link.href}
                    className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
