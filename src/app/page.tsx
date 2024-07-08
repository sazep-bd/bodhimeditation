import ImageWithLink from "@/components/atoms/BodhiLogo";
import Header from "@/components/organisms/header";
import Image from "next/image";
import HeroBanner from "@/components/organisms/HeroBanner";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroBanner />
    </main>
  );
}

export default Home;
