/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'; // Import from next/link for Next.js routing

const ImageWithLink = () => {
  return (
    <div className='float-left'>
      <Link href="/">
        <img
          src="/images/BODHI_Logo_v2.0.png"
          alt="Image"
          className="w-24 h-24 bg-neutral-300"
        />
      </Link>
    </div>
  );
}

export default ImageWithLink;
