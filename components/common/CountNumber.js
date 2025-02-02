"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CountNumber = ({ number, prefix, suffix }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div ref={sectionRef}>
      {isVisible && (
        <CountUp
          end={number}
          duration={2.5}
          separator=","
          prefix={prefix}
          suffix={suffix}
        />
      )}
    </div>
  );
};

export default CountNumber;
