/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import React from 'react';


const Navlinks = () => {
  return (
    <div className="grid grid-cols-4 gap-3 items-center">
      <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
        Home
      </a>
      <Disclosure>
        <DisclosureButton className="py-2">Events</DisclosureButton>
        <DisclosurePanel className="text-gray-900">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Regular Events
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Special Events
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Dhamma Teaching
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Learning Buddhism
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Learning Meditation
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Fung
          </a>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="py-2">Support us</DisclosureButton>
        <DisclosurePanel className="text-gray-900">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Dana
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Donation
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Volunteering 
          </a>
        </DisclosurePanel>
      </Disclosure>

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


