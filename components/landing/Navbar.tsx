import Link from "next/link";
import React from "react";
import {
  SiStripe,
  SiNotion,
  SiLinear,
  SiVercel,
  SiFigma,
  SiOpenai,
} from "react-icons/si";

const companies = [
  { name: "Stripe", icon: SiStripe },
  { name: "Notion", icon: SiNotion },
  { name: "Linear", icon: SiLinear },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma },
  { name: "OpenAI", icon: SiOpenai },
];

const Navbar = () => {
  return (
    <div className="group absolute -top-5 left-[32vw] z-99 hidden cursor-pointer sm:block">
      <div className="scale-x-[0.52] transition-transform duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="472"
          height="83"
          viewBox="0 0 472 82.86"
        >
          <path
            fill="#000000"
            d="M 0,22.9 L 0,33.9 L 57.3,34.2 L 114.5,34.6 L 122.5,37.3 C 133.4,40.9 140.3,45.2 154.9,57.5 C 169.5,69.8 177.7,74.9 188,78.4 C 201,82.7 208.8,83.2 262,82.7 C 308.7,82.4 311.9,82.2 319.2,80.2 C 331.1,76.9 341.5,71.1 353.9,60.8 C 369.6,47.8 377.5,42.4 385,39.5 C 397.9,34.6 403,34 438.8,34 L 472,34 L 472,17 L 472,0 L 236,0 L 0,0 L 0,16.9 Z"
          />
        </svg>
      </div>
      <div className="absolute top-12 left-10 flex gap-5">
        <Link
          href={"/"}
          className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
        >
          Home
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
        </Link>
        <Link
          href={"#"}
          className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
        >
          About
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
        </Link>
      </div>
      <div className="absolute top-12 right-1 flex gap-5">
        <Link
          href={"#"}
          className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
        >
          Blogs
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
        </Link>
        <Link
          href={"/contact"}
          className="group/link relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
        >
          Contact
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
        </Link>
      </div>

      <div className="absolute top-10 left-[235]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.958"
          height="24.991"
          fill="none"
          overflow="visible"
        >
          <g>
            <path
              d="M 21.12 22.771 C 26.27 17.529 26.232 9.117 21.036 3.921 C 15.84 -1.275 7.428 -1.311 2.187 3.838 L 6.605 8.256 C 7.302 8.953 8.427 8.918 9.315 8.488 C 11.368 7.49 13.828 7.903 15.442 9.517 C 17.056 11.132 17.469 13.592 16.471 15.645 C 16.04 16.532 16.005 17.657 16.702 18.354 L 21.12 22.771 Z"
              fill="rgb(255, 255, 255)"
            ></path>
            <path
              d="M 18.743 24.991 L 12.189 24.991 C 11.242 24.991 10.335 24.614 9.665 23.945 L 1.045 15.326 C 0.376 14.657 0 13.748 0 12.801 L 0 6.248 Z M 6.694 24.991 L 2.678 24.991 C 1.199 24.991 0 23.792 0 22.313 L 0 18.297 Z"
              fill="rgb(255, 255, 255)"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="absolute -bottom-6 -left-50 z-99 mt-10 hidden w-fit sm:block">
      <svg
        className="scale-x-[2] scale-y-160 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="83"
        viewBox="0 0 472 82.86"
      >
        <path
          fill="#000000"
          d="M 0,22.9 L 0,33.9 L 57.3,34.2 L 114.5,34.6 L 122.5,37.3 C 133.4,40.9 140.3,45.2 154.9,57.5 C 169.5,69.8 177.7,74.9 188,78.4 C 201,82.7 208.8,83.2 262,82.7 C 308.7,82.4 311.9,82.2 319.2,80.2 C 331.1,76.9 341.5,71.1 353.9,60.8 C 369.6,47.8 377.5,42.4 385,39.5 C 397.9,34.6 403,34 438.8,34 L 472,34 L 472,17 L 472,0 L 236,0 L 0,0 L 0,16.9 Z"
        />
      </svg>

      {/* infinite marquee of trust logos */}
      <div
        className="absolute inset-x-0 top-2 left-2 max-w-93 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
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
