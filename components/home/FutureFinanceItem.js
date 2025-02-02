import Image from "next/image";

const FutureFinanceItem = ({ item }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:p-16 p-5 shadow-slide-item-shadow rounded-lg bg-white-text m-5">
      <div className="">
        <h3 className="text-blue-text lg:text-lg text-sm lg:font-bold font-semibold lg:tracking-[3px] uppercase tracking-[2px]">
          {item?.subtitle}
        </h3>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-black/85 lg:leading-[65px] my-5">
          {item?.title}
        </h1>

        <div className="md:hidden block">
          <Image
            src={item?.img}
            width={5000}
            height={5000}
            alt="item"
            className="object-cover h-full rounded-2xl"
          />
        </div>

        <p className="text-blue-text2 my-6">
          <strong>{item?.text1}</strong>
        </p>

        <p className="text-blue-text2">{item?.text2}</p>
      </div>
      <div className="md:block hidden">
        <Image
          src={item?.img}
          width={5000}
          height={5000}
          alt="item"
          className="object-cover h-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FutureFinanceItem;
