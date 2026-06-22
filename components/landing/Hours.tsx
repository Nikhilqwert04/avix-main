import React from "react";

const Hours = () => {
  return (
    <div className="mt-5 flex h-[340px] w-full scale-100 justify-center text-2xl">
      <svg
        className="absolute w-full overflow-hidden"
        viewBox="0 0 1400 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#404040" />
            <stop offset="60%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#888888" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="360"
          fontWeight="bold"
          letterSpacing="-10"
          fill="url(#fillGrad)"
          stroke="url(#strokeGrad)"
          strokeWidth="2"
          paintOrder="stroke fill"
          style={{ fontFamily: "inherit" }}
        >
          10M
        </text>
      </svg>

      <h1 className="absolute z-99 mt-30 h-auto w-[780px] bg-linear-to-b from-[#ffffff] to-[#999999] bg-clip-text text-center text-[54px] leading-[1.1] font-semibold tracking-tighter whitespace-pre-wrap text-transparent">
        We are Notch we saves team over 10 million hours every years
      </h1>
    </div>
  );
};

export default Hours;
