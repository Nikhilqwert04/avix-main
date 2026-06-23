import React from "react";

const InfoPill = ({ title }: { title: string }) => {
  return (
    <span className="w-fit rounded-full border border-neutral-800 bg-neutral-900 px-2 py-1 text-sm">
      {title}
    </span>
  );
};

export default InfoPill;
