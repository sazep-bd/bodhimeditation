import React from 'react';
import Image from 'next/image';

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner relative w-full h-screen">
      <Image
        src="/images/Image_1.jpg"
        alt="Buddha statue with cherry blossoms"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-10">
        <h1 className="text-5xl font-semibold mb-6 text-left">
          disciplined mind brings happiness
        </h1>
        <button className="bg-tan-silver text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
          contact us →
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
