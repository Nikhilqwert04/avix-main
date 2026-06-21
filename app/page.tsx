import Landing from "@/components/landing/Landing";
import Navbar, { Footer } from "@/components/landing/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center">
      <Navbar />
      <Landing />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default page;
