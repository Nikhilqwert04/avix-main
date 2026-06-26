import type { Metadata } from "next";
import React from "react";
import Heading from "../../components/blog/Heading";
import Blogs from "@/components/blog/Blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on product engineering, shipping MVPs, and scaling startups — practical writing from the Avix team.",
  alternates: { canonical: "/blogs" },
};

const blog = () => {
  return (
    <div className="mb-20 flex min-h-screen w-full flex-col items-center gap-10">
      <Heading />
      <Blogs />
    </div>
  );
};

export default blog;
