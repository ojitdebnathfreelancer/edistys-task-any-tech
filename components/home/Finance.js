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
    </div>
  );
};

export default Finance;
