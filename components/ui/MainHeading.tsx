import { cn } from "@/lib/utils";
import React from "react";
import { StepCount } from "../landing/Working";

const MainHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "max-w-xl text-center text-[46px] leading-none font-semibold tracking-tighter",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default MainHeading;
