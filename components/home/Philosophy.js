import Image from "next/image";
import React from "react";
import PhilosophyPoint from "./PhilosophyPoint";

const Philosophy = () => {
  return (
    <div className="root-container mt-5">
      <h3 className="text-blue-text lg:text-lg text-sm lg:font-bold font-semibold lg:tracking-[3px] tracking-[2px] text-center mb-5">
        OUR PHILOSOPHY
      </h3>
      <h1 className="lg:text-6xl text-4xl font-semibold text-blue-text2 lg:leading-[65px] text-center">
        Human-centred innovation
      </h1>

      <Image
        src="/philosophy/philosophy.avif"
        width={2000}
        height={1000}
        alt="philosophy"
        className="w-full mt-10 md:block hidden"
      />
      <Image
        src="/philosophy/philosophy2.avif"
        width={2000}
        height={1000}
        alt="philosophy"
        className="w-full mt-10 md:hidden block"
      />

      <PhilosophyPoint />
    </div>
  );
};

export default Philosophy;
