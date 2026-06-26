import type { Metadata } from "next";
import Main from "../../components/contact/Main";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a product to build? Get in touch with Avix to scope your project, kick off in a week, and start shipping with a senior engineering team.",
  alternates: { canonical: "/contact" },
};

const page = () => {
  return <Main />;
};

export default page;
