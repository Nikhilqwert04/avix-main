import Landing from "@/components/landing/Landing";
import Navbar, { Footer } from "@/components/landing/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex min-h-screen flex-col items-center px-4">
        <Landing />
        <div className="relative">
          <Footer />
        </div>
      </div>
      <div className="flex min-h-screen min-w-screen items-center justify-center text-8xl">
        Under Work
      </div>
    </div>
  );
};

export default page;
