"use client";
import Image from "next/image";
import BannerButton from "./BannerButton";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [prevMousePos, setPrevMousePos] = useState({ x: 0, y: 0 });

  const [whichSide, setWhichSide] = useState(null);

  const handleMoveX = useCallback((deltaX) => {
    setWhichSide(deltaX > 0 ? "xRight" : "xLeft");
  }, []);

  const handleMoveY = useCallback((deltaY) => {
    setWhichSide(deltaY > 0 ? "yDown" : "yUp");
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;

      if (
        Math.abs(clientX - prevMousePos.x) > Math.abs(clientY - prevMousePos.y)
      ) {
        handleMoveX(clientX - prevMousePos.x);
      } else {
        handleMoveY(clientY - prevMousePos.y);
      }

      setPrevMousePos({ x: clientX, y: clientY });
    },
    [prevMousePos, handleMoveX, handleMoveY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="xl:h-[max(620px,_calc(95vh-50px))] lg:h-[max(645px,_calc(95vh-50px))] w-full lg:clip-hero-clip clip-hero-clip-phone relative overflow-hidden hero-bg">
      <Image
        src="/backgrounds/WaveLinesDesktop2.svg"
        alt="banner"
        height={10000}
        width={10000}
        className={`object-cover duration-500 absolute lg:block hidden ${
          whichSide === "yUp" ? "top-[-500px]" : "top-[-530px]"
        } ${whichSide === "xLeft" ? "left-[-120px]" : "left-[-145px]"} z-[1]`}
      />

      <Image
        src="/backgrounds/WaveLinesDesktop1.svg"
        alt="banner2"
        height={10000}
        width={10000}
        className={`bg-cover duration-500 absolute lg:block hidden ${
          whichSide === "yUp" ? "top-[20px]" : "top-[-2px]"
        } ${whichSide === "xLeft" ? "left-[20px]" : "left-[-1px]"} z-[2]`}
      />

      <Image
        src="/backgrounds/WaveLinesMobile1.svg"
        alt="banner3"
        height={10000}
        width={10000}
        className={`bg-cover absolute top-0 left-0 z-[1]`}
      />

      <div className="root-container text-white text-2xl relative z-10 h-full w-full flex items-center">
        <div className="h-fit lg:w-[62%] w-full py-16">
          <h1 className="lg:text-[80px] lg:leading-[80px] text-6xl leading-[70px] font-bold">
            Embrace the future of finance
          </h1>
          <p className="my-10 text-lg lg:mr-[70px] md:mr-[85px] mr-0 font-semibold">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>
          <BannerButton />
        </div>
      </div>

      <div className="lg:clip-bg-clip-hero-image clip-bg-clip-hero-image-phone xl:w-[65%] lg:w-[90%] w-full lg:h-full lg:absolute top-[0px] xl:right-[0px] lg:right-[-220px] z-[1]">
        <Image
          src="/banner/banner-human.avif"
          alt="human"
          height={10000}
          width={10000}
          className="object-cover"
        />
        <div className="gradient-overlay-img w-full h-full top-0 left-0 absolute lg:block hidden"></div>
      </div>
    </div>
  );
};

export default Banner;
