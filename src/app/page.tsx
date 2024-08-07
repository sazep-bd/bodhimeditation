import ImageWithLink from "@/components/atoms/BodhiLogo";
import HomeImageCard from "@/components/molecules/HomeImageCard";
import Header from "@/components/organisms/header";
import Image from "next/image";
import HeroBanner from "@/components/organisms/HeroBanner";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <HeroBanner />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>
      <HomeImageCard
        imageUrl="/images/Learning_Bhuddhism_2.jpg"
        title="Dhamma Teaching"
        description="Please join our weekly meditation session to learn about Buddhism and Meditation. Add more text here..."
      />
    </main>
  );
}

export default Home;
