"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    brand: "/brands/brand1.webp",
  },
  {
    brand: "/brands/brand2.webp",
  },
  {
    brand: "/brands/brand3.webp",
  },
  {
    brand: "/brands/brand4.webp",
  },
  {
    brand: "/brands/brand5.webp",
  },
  {
    brand: "/brands/brand6.webp",
  },
  {
    brand: "/brands/brand7.webp",
  },
  {
    brand: "/brands/brand8.webp",
  },
  {
    brand: "/brands/brand9.webp",
  },
  {
    brand: "/brands/brand10.webp",
  },
  {
    brand: "/brands/brand11.webp",
  },
  {
    brand: "/brands/brand12.webp",
  },
  {
    brand: "/brands/brand13.webp",
  },
  {
    brand: "/brands/brand14.webp",
  },
  {
    brand: "/brands/brand15.webp",
  },
];

const Brands = () => {
  return (
    <div className="md:mt-32 my-10">
      <div className="root-container md:grid hidden justify-center lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-12">
        {data?.map((img, i) => (
          <div key={i} className="h-[100px] flex items-center justify-center">
            <Image
              src={img?.brand}
              width={200}
              height={200}
              alt="brand"
              className="object-cover self-center"
            />
          </div>
        ))}
      </div>
      <div className="md:hidden block">
        <Swiper
          className="mySwiper"
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={-15}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: 1000,
          }}
          modules={[Autoplay]}
        >
          {data?.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center h-[100px]">
                <Image
                  src={img?.brand}
                  width={200}
                  height={200}
                  alt="brand"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
