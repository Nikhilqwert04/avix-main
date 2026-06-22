import React from "react";
import Heading from "../../components/blog/Heading";
import Blogs from "@/components/blog/Blogs";

const blog = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Heading />
      <Blogs />
    </div>
  );
};

export default blog;
