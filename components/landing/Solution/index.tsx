"use client";
import InfoPill from "../../ui/InfoPill";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import FifthCard from "./FifthCard";
import SixthCard from "./SixthCard";
import MainHeading from "@/components/ui/MainHeading";

const Solution = () => {
  return (
    <div className="flex h-fit flex-col items-center gap-2 pb-20">
      <InfoPill title="Our solutions" />
      <MainHeading title="AI Solutions That Help You Work Faster and Smarter" />

      <div className="mt-8 grid h-screen w-full grid-cols-3 grid-rows-5 gap-5">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FifthCard />
        <FourthCard />
        <SixthCard />
      </div>
    </div>
  );
};

export default Solution;
