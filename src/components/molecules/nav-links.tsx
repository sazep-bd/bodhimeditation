
"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navlinks = () => {
  const [openDisclosure, setOpenDisclosure] = useState(null);

  const handleToggle = (index) => {
    setOpenDisclosure(openDisclosure === index ? null : index);
  };

  return (
    <div className="float-right pl-96 pr-16 grid grid-flow-col gap-2 items-center justify-items-center">
      <a href="/" className="text-sm leading-6 text-gray-900">
        Home
      </a>
      <div className="relative">
        <Disclosure as="div" className="relative">
          {({ open }) => (
            <>
              <div className="flex items-center">
                <DisclosureButton
                  className="py-2 text-gray-900 flex items-center"
                  onClick={() => handleToggle(1)}
                >
                  Events
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-900"
                  />
                </DisclosureButton>
              </div>
              {openDisclosure === 1 && (
                <DisclosurePanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-900 grid grid-cols-1">
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Regular Events
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Special Events
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Dhamma Teaching
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Learning Buddhism
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Learning Meditation
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Fung
                  </a>
                </DisclosurePanel>
              )}
            </>
          )}
        </Disclosure>
      </div>

      <div className="relative">
        <Disclosure as="div" className="relative">
          {({ open }) => (
            <>
              <div className="flex items-center">
                <DisclosureButton
                  className="py-2 text-gray-900 flex items-center"
                  onClick={() => handleToggle(2)}
                >
                  Support us
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-900"
                  />
                </DisclosureButton>
              </div>
              {openDisclosure === 2 && (
                <DisclosurePanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-900 grid grid-cols-1">
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Dana
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Donation
                  </a>
                  <a
                    href="/"
                    className="text-sm leading-6 text-gray-900 p-2 hover:bg-gray-100"
                  >
                    Volunteering
                  </a>
                </DisclosurePanel>
              )}
            </>
          )}
        </Disclosure>
      </div>

      <a href="/resources" className="text-sm leading-6 text-gray-900">
        Resources
      </a>
      <a href="/contacts" className="text-sm leading-6 text-gray-900">
        Contacts
      </a>
    </div>
  );
};

export default Navlinks;
