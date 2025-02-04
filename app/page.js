import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Counter from "@/components/home/Counter";
import Finance from "@/components/home/Finance";
import FutureFinance from "@/components/home/FutureFinanceSlide";
import Legacy from "@/components/home/Legacy";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <div>
      <Banner />
      <Finance />
      <Philosophy />
      <FutureFinance />
      <Counter />
      <Brands />
      <Legacy />
    </div>
  );
}
