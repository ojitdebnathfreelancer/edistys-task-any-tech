import Banner from "@/components/home/Banner";
import Counter from "@/components/home/Counter";
import Finance from "@/components/home/Finance";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <div>
      <Banner />
      <Finance />
      <Philosophy />
      <Counter />
    </div>
  );
}
