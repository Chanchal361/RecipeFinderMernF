import React, { useState } from "react";
import DeskTop from "./DeskTop";
import Mobile from "./Mobile";
import logo from "/logo.svg";

const Header = () => {
  const menuItem = ["recipe", "resources", "about", "contact"];
  const [hide, setHide] = useState("-left-[1000px]");
  const onOpen = () => {
    setHide("left-0");
  };
  const onClose = () => {
    setHide("-left-[1000px]");
  };

  return (
    <>
      <div className=" max-[900px]:hidden">
        <DeskTop menuItem={menuItem} logo={logo} />
      </div>
      <div className=" min-[900px]:hidden">
        <Mobile
          menuItem={menuItem}
          logo={logo}
          onClose={onClose}
          onOpen={onOpen}
          hide={hide}
        />
      </div>
    </>
  );
};

export default Header;
