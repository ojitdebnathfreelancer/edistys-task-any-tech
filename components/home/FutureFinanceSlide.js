"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import FutureFinanceItem from "./FutureFinanceItem";

const data = [
  {
    img: "/future-finance/item1.avif",
    title: "Purpose-built financial services",
    subtitle: "Customer focused",
    text1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    text2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
  },
  {
    img: "/future-finance/item2.avif",
    title: "Agile and adaptable for growth",
    subtitle: "Agile and adaptable",
    text1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    text2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
  },
  {
    img: "/future-finance/item3.avif",
    title: "Manage compliance with ease",
    subtitle: "Compliance ready",
    text1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    text2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
  },
  {
    img: "/future-finance/item4.avif",
    title: "Highly secure and safe",
    subtitle: "Secure and safe",
    text1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    text2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
  },
];

const buttonText = [
  {
    text: "Customer focused",
  },
  {
    text: "Agile and adaptable",
  },
  {
    text: "Compliance ready",
  },
  {
    text: "Secure and safe",
  },
];

const FutureFinance = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span className="' +
        className +
        '">' +
        buttonText[index]?.text +
        "</span>"
      );
    },
  };

  return (
    <section id="future-finance" className="mt-28">
      <h3 className="text-blue-text lg:text-lg text-sm lg:font-bold font-semibold lg:tracking-[3px] tracking-[2px] text-center">
        TECHNOLOGY BUILT FOR YOU
      </h3>
      <h1 className="lg:text-6xl text-4xl font-semibold text-black/85 lg:leading-[65px] my-4 text-center">
        The future of finance
      </h1>
      <div className="root-container">
        <div className="">
          <Swiper
            pagination={pagination}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: 1000,
            }}
            speed={1500}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <FutureFinanceItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default FutureFinance;
