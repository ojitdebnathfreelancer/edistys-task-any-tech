import FinanceImg from "./FinanceImg";

const Finance = () => {
  return (
    <div className="mt-20">
      <div className="root-container md:flex justify-between gap-x-20">
        <div className="md:w-[50%]">
          <h3 className="text-blue-text lg:text-lg text-sm lg:font-bold font-semibold lg:tracking-[3px] tracking-[2px]">
            POWERING THE FUTURE OF FINANCE
          </h3>
          <h1 className="lg:text-6xl text-4xl font-semibold text-black/85 lg:leading-[65px] my-7">
            Uncovering new ways to delight customers
          </h1>
          <div className="md:hidden block my-20">
            <FinanceImg />
          </div>
          <p className="text-blue-text2 my-7">
            <strong>
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </strong>
          </p>
          <p className="text-blue-text2">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <div className="w-[50%] self-end md:block hidden">
          <FinanceImg />
        </div>
      </div>
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px] __web-inspector-hide-shortcut__"
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
    </div>
  );
};

export default Finance;
