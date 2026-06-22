"use client";
import React from "react";

const LeftSection = () => {
  const contactInfo = [
    { title: "Email", text: "Admin@mail.com" },
    { title: "Phone", text: "+0948209850" },
    { title: "Timing", text: "Monday to Friday : 9AM-6PM" },
    { title: "Address", text: "Address" },
  ];

  return (
    <div className="flex w-full flex-col gap-10 lg:w-130">
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-linear-to-r from-[#0f0f0f] to-[#050505] p-6"
        >
          <div className="absolute top-0 -left-16 h-full w-32 bg-white/5 blur-3xl"></div>

          <div className="relative z-10 flex flex-col gap-1">
            <h3 className="text-lg font-medium text-zinc-100">{info.title}</h3>
            <p className="text-base text-zinc-400">{info.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSection;
