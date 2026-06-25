"use client";
import React from "react";

const RightSection = () => {
  return (
    <div className="w-full rounded-2xl bg-[#0F0F0F] p-4 md:px-4 md:py-6 lg:w-[690px]">
      <form className="flex w-full flex-col gap-4 md:gap-3">
        <div className="gap- flex w-full flex-col md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-sm">First Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="text-md h-12 w-full rounded-lg border border-[#999999]/10 bg-[#1D1D1D] px-4 text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-sm">Last Name</label>
            <input
              type="text"
              placeholder="Smith"
              className="text-md h-12 w-full rounded-lg border border-[#999999]/10 bg-[#1D1D1D] px-4 text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-sm">Email</label>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="text-md h-12 w-full rounded-lg border border-[#999999]/10 bg-[#1D1D1D] px-4 text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-sm">Phone</label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="text-md h-12 w-full rounded-lg border border-[#999999]/10 bg-[#1D1D1D] px-4 text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-2 flex w-full flex-col gap-2 md:mt-1">
          <label className="text-lg text-white md:text-sm">Message</label>
          <textarea
            placeholder="Write your message here..."
            className="w-full resize-none rounded-xl border border-[#999999]/10 bg-[#1D1D1D] p-4 text-sm text-white transition-colors focus:border-white focus:outline-none"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit Form"
          className="mt-2 w-full cursor-pointer rounded-full bg-[#999999] py-2 text-base font-semibold text-black transition-colors hover:bg-white md:text-base"
        />
      </form>
    </div>
  );
};

export default RightSection;
