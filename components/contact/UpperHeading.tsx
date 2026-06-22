"use client";
import React from "react";

const UpperHeading = () => {
  return (
    <div className="flex w-full max-w-6xl justify-start px-4">
      <div className="flex flex-col justify-start gap-4">
        <div className="w-fit rounded-full bg-[#0055ff] px-3 py-1 text-xs text-white">
          Content
        </div>
        <div className="text-4xl font-semibold text-white md:text-6xl lg:text-7xl">
          Have a Project in<br></br> Mind? Let&apos;s Talk
        </div>
      </div>
    </div>
  );
};

export default UpperHeading;
