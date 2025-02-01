import Image from "next/image";

const FinanceImg = () => {
  return (
    <div className="relative lg:m-0 md:m-4 m-6">
      <Image
        src="/finance/customer.avif"
        alt="customer"
        width={400}
        height={400}
        className="shadow-button-primary-shadow"
      />

      <Image
        src="/finance/card.svg"
        alt="card"
        width={80}
        height={80}
        className="absolute top-[80px] left-[-40px] finance-animate1"
      />

      <Image
        src="/finance/chart.svg"
        alt="chart"
        width={80}
        height={80}
        className="absolute top-[180px] left-10 finance-animate2"
      />

      <Image
        src="/finance/home.svg"
        alt="home"
        width={110}
        height={110}
        className="absolute top-[80px] xl:right-20 lg:right-0 right-[-32px] finance-animate3"
      />

      <Image
        src="/finance/bg1.svg"
        alt="bg1"
        width={5000}
        height={5000}
        className="absolute lg:top-[-100px] top-[-45px] lg:left-[-50px] left-[-25px] object-cover"
      />
      <Image
        src="/finance/bg2.png"
        alt="bg2"
        width={5000}
        height={5000}
        className="absolute bottom-[-40px] lg:left-[-35px] left-[15px]"
      />
    </div>
  );
};

export default FinanceImg;
