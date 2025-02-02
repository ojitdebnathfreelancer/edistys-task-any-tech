"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import BannerButton from "./BannerButton";

const Legacy = () => {
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
    <div className="legacy-bg relative lg:h-[530px] h-[400px]  w-full bg-[url('/legacy/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover xl:clip-legacy-clip-xl md:clip-legacy-clip-lg clip-legacy-clip-phone overflow-hidden">
      <Image
        src="/legacy/cta-bg1.svg"
        width={2000}
        height={500}
        alt="bg1"
        className={`object-cover absolute duration-1000  ${
          whichSide === "yDown"
            ? "xl:-top-3 lg:top-[60px]"
            : "xl:top-0 lg:top-[70px]"
        } ${whichSide === "xLeft" ? "-left-3" : "left-0"} lg:block hidden`}
      />
      <Image
        src="/legacy/cta-bg2.svg"
        width={1000}
        height={500}
        alt="bg2"
        className={`object-cover absolute duration-1000  ${
          whichSide === "yDown"
            ? "md:top-3 top-[190px]"
            : "md:top-0 top-[200px]"
        } ${whichSide === "xLeft" ? "left-3" : "left-0"}`}
      />
      <div className="root-container relative flex flex-col justify-center h-full w-full z-50 xl:gap-10 gap-7">
        <h1 className="lg:text-6xl text-4xl font-semibold text-white-text">
          Legacy no longer
        </h1>
        <p className="lg:text-xl md:text-lg text-white-text font-medium">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <BannerButton text="Contact us" />
      </div>
    </div>
  );
};

export default Legacy;
