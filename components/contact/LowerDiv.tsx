"use client";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const LowerDiv = () => {
  return (
    <div className="mt-12 flex w-full max-w-6xl flex-col items-start justify-center gap-8 px-4 lg:flex-row">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default LowerDiv;
