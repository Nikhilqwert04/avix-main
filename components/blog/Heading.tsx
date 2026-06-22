import React from "react";

const Heading = () => {
  return (
    <div className="flex w-full max-w-6xl pt-40 pb-7">
      <div className="flex flex-col justify-start gap-4">
        <div className="text-mg w-fit rounded-full bg-[#0055ff] px-3 py-1 text-white">
          Blog
        </div>
        <div className="text-4xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">
          Expert Perspectives on <br></br>AI-Powered Automation
        </div>
      </div>
    </div>
  );
};

export default Heading;
