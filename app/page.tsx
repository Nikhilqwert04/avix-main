import Hours from "@/components/landing/Hours";
import Landing from "@/components/landing/Landing";
import Navbar, { Footer } from "@/components/landing/Navbar";
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

      <Hours />
      <Working />
    </div>
  );
};

export default page;
