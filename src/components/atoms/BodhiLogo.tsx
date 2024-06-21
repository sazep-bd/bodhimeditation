import React from 'react';
import Link from 'next/link'; // Import from next/link for Next.js routing

const ImageWithLink = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <img src="public/images/BODHI_Logo_v2.0.png" alt="Image" />
        </a>
      </Link>
    </div>
  );
}

export default ImageWithLink;
