import React from "react";

const Counter = () => {
  return (
    <div className="root-container mt-20">
      <h3 className="text-blue-text lg:text-lg text-sm lg:font-bold font-semibold lg:tracking-[3px] tracking-[2px] text-center mb-5">
        TRUSTED BY THE BEST
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="text-center lg:block flex justify-between lg:py-0 py-5 lg:border-none border-b-[1.5px] border-dotted border-blue-text/70">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#1F80F0] to-[#0057BB] md:text-8xl text-6xl font-semibold">{`>20`}</h1>
          <p className="text-xl mt-4">Years of Experience</p>
        </div>

        <div className="text-center lg:block flex justify-between lg:py-0 py-5 lg:border-none border-b-[1.5px] border-dotted border-blue-text/70">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#1F80F0] to-[#0057BB] md:text-8xl text-6xl font-semibold">{`40+`}</h1>
          <p className="text-xl mt-4">Financial Institutions</p>
        </div>

        <div className="text-center lg:block flex justify-between lg:py-0 py-5 lg:border-none border-b-[1.5px] border-dotted border-blue-text/70">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#1F80F0] to-[#0057BB] md:text-8xl text-6xl font-semibold">{`>200m`}</h1>
          <p className="text-xl mt-4">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
