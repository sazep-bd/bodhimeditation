/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navlinks from "../molecules/nav-links";
import ImageWithLink from "../atoms/BodhiLogo";

const Header = () => {
  return (
    <div>
      <ImageWithLink />
      <Navlinks />
    </div>
  );
};

export default Header;
