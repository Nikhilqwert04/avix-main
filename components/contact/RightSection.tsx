"use client";
import React from "react";

const RightSection = () => {
  return (
    <div className="w-full rounded-2xl bg-[#2c2b2b21] p-4 md:p-8 lg:w-[600px]">
      <form className="flex w-full flex-col gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-xl">First Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="h-13 w-full rounded-xl border border-[#999999]/10 bg-transparent px-4 text-lg text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-xl">Last Name</label>
            <input
              type="text"
              placeholder="Smith"
              className="h-13 w-full rounded-xl border border-[#999999]/10 bg-transparent px-4 text-lg text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-xl">Email</label>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="h-13 w-full rounded-xl border border-[#999999]/10 bg-transparent px-4 text-lg text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-white md:text-xl">Phone</label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="h-13 w-full rounded-xl border border-[#999999]/10 bg-transparent px-4 text-lg text-white transition-colors focus:border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-2 flex w-full flex-col gap-2 md:mt-4">
          <label className="text-lg text-white md:text-xl">Message</label>
          <textarea
            placeholder="Please Enter your text here...!!!"
            className="w-full resize-none rounded-2xl border border-[#999999]/10 bg-transparent p-4 text-lg text-white transition-colors focus:border-white focus:outline-none"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit Form"
          className="mt-4 w-full cursor-pointer rounded-full bg-[#999999] py-4 text-lg font-semibold text-black transition-colors hover:bg-white md:text-xl"
        />
      </form>
    </div>
  );
};

export default RightSection;
