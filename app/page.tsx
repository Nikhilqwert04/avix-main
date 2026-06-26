import Benefits from "@/components/landing/Benefits/Benefits";
import CaseStudy from "@/components/landing/CaseStudy";
import { Comparision } from "@/components/landing/Comparision";
import { Contact } from "@/components/landing/Contact";
import Faq from "@/components/landing/Faq";
import FooterSection from "@/components/landing/FooterSection";
import Hours from "@/components/landing/Hours";
import Landing from "@/components/landing/Landing";
import Navbar, { Footer } from "@/components/landing/Navbar";
import StickyNavbar from "@/components/landing/StickyNavbar";
import Pricing from "@/components/landing/Pricing";
import Solution from "@/components/landing/Solution";
import Testemonials from "@/components/landing/Testemonials";
import Working from "@/components/landing/Working";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <StickyNavbar />
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
        <Benefits />
        <Testemonials />
        <Pricing />
        <Comparision />
        <Faq />
      </div>
      <Contact />
      <div className="mx-auto w-full max-w-6xl px-0"></div>
    </div>
  );
};

export default page;
