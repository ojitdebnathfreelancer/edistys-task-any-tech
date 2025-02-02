"use client";

import { IoIosArrowForward } from "react-icons/io";

const BannerButton = ({ text }) => {
  return (
    <button
      type="button"
      className="outline-none bg-orange-main-bg text-white-text shadow-button-primary-shadow rounded-md px-10 text-lg py-2 flex items-center lg:justify-start justify-center relative z-40 group lg:w-min md:w-[90%] w-full"
    >
      <span className="w-40 block text-md group-hover:pr-5 duration-300 font-semibold">
        {text}
      </span>
      <IoIosArrowForward size={15} className="group-hover:pl-1 duration-300" />
    </button>
  );
};

export default BannerButton;
