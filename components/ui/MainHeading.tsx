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
        "max-w-xl text-center text-3xl leading-tight font-semibold tracking-tighter sm:text-4xl md:text-[46px] md:leading-none",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default MainHeading;
