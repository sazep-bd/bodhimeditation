/* eslint-disable @next/next/no-img-element */
import React from 'react';


const Navlinks = () => {
  return (
    <div className="grid grid-cols-4 gap-3 items-center">
      <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
        Home
      </a>
      <a
        href="/resources"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Resources
      </a>
      <a
        href="/contacts"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Contacts
      </a>
    </div>
  );
}

export default Navlinks;


