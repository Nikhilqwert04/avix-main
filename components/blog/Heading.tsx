import React from "react";

const Heading = () => {
  return (
    <div className="flex w-full max-w-6xl px-8 pt-28 pb-6">
      <div className="flex flex-col justify-start gap-3">
        <div className="w-fit rounded-full bg-[#0055ff] px-3 py-1 text-sm text-white">
          Blog
        </div>
        <div className="text-3xl font-semibold tracking-tighter text-white md:text-[46px] md:leading-none">
          Expert Perspectives on AI-Powered Automation
        </div>
      </div>
    </div>
  );
};

export default Heading;
