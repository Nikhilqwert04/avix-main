import CaseStudy from "@/components/landing/CaseStudy";
import Hours from "@/components/landing/Hours";
import Landing from "@/components/landing/Landing";
import Navbar, { Footer } from "@/components/landing/Navbar";
import Solution from "@/components/landing/Solution";
import Working from "@/components/landing/Working";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <div className="flex min-h-screen flex-col items-center px-6">
        <Landing />
        <div className="relative">
          <Footer />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <Hours />
        <Working />
        <Solution />
        <CaseStudy />
      </div>
    </div>
  );
};

export default page;
