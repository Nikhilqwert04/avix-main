import React from "react";
import Heading from "../../components/blog/Heading";
import Blogs from "@/components/blog/Blogs";

const blog = () => {
  return (
    <div className="mb-20 flex min-h-screen w-full flex-col items-center gap-10">
      <Heading />
      <Blogs />
    </div>
  );
};

export default blog;
