/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import React from 'react';
import { useState } from "react";
import { ChevronDownIcon} from '@heroicons/react/20/solid';


const Navlinks = () => {
  return (
    <div className="float-right pl-96 pr-16 grid grid-flow-col gap-2  items-center justify-items-center ">
      <a href="/" className="text-sm leading-6 text-gray-900">
        Home
      </a>
      <Disclosure>
        <DisclosureButton className="py-2 gap-0 text-gray-900">
          Events
        </DisclosureButton>
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 gap-0 text-gray-900"
        />
        <DisclosurePanel className="text-gray-900">
          <a href="/" className="text-sm leading-6 text-gray-900">
            Regular Events
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Special Events
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Dhamma Teaching
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Learning Buddhism
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Learning Meditation
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Fung
          </a>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="py-2 text-gray-900">
          Support us
        </DisclosureButton>
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 relative text-gray-900"
        />

        <DisclosurePanel className="text-gray-900">
          <a href="/" className="text-sm leading-6 text-gray-900">
            Dana
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Donation
          </a>
          <a href="/" className="text-sm leading-6 text-gray-900">
            Volunteering
          </a>
        </DisclosurePanel>
      </Disclosure>

      <a href="/resources" className="text-sm leading-6 text-gray-900">
        Resources
      </a>
      <a href="/contacts" className="text-sm leading-6 text-gray-900">
        Contacts
      </a>
    </div>
  );
}

export default Navlinks;


