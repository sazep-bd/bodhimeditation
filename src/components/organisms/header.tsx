

import React from "react";
import Navlinks from "../molecules/nav-links";
import ImageWithLink from "../atoms/BodhiLogo";

const Header = () => {
  return (
    <div className="flex">
      <ImageWithLink />
      <Navlinks />
    </div>
  );
};

export default Header;
