import ImageWithLink from "@/components/atoms/BodhiLogo";
import Header from "@/components/organisms/header";
import Image from "next/image";
import Card from "@/components/atoms/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>

      <Card className="flex flex-col gap-2 bg-white text-black max-w-xs p-4">
        <div className="bg-[url('/images/Learning_Bhuddhism_2.jpg')] h-64 bg-center justify-center"></div>
        {/* <img src="\images\Learning_Bhuddhism_2.jpg" alt="" /> */}
        <div className=" text-4xl text-center">Dhamma Teaching</div>
        <div className="bg-light-grey w-fit p-2 rounded">
          Please join our weekly meditation session to learn about Buddhism and Meditation.
          Add more text here...
        </div>
      </Card>
      
    </main>
  );
}
