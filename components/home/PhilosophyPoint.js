"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

const data = [
  {
    icon: "/philosophy/icon1.svg",
    title: "Full-suite solutions",
    text: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "/philosophy/icon2.avif",
    title: "Simplify the complex",
    text: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: "/philosophy/icon3.svg",
    title: "Cutting-edge tech",
    text: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const PhilosophyPoint = () => {
  // initialized aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
      {data.map((item, i) => (
        <div
          data-aos="fade-up"
          key={i}
          className="bg-gray-bg rounded-xl md:p-4 p-5"
        >
          <Image src={item?.icon} alt="icon" width={50} height={50} />
          <h1 className="text-2xl text-blue-text2 font-semibold my-5">
            {item?.title}
          </h1>
          <p className="text-blue-text2">{item?.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PhilosophyPoint;
