import React from "react";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";

// SVG
import { ReactComponent as ArrowDown } from "./icons/down-arrow.svg";
import { ReactComponent as MessengerSvg } from "./icons/messenger.svg";
import { ReactComponent as BellSvg } from "./icons/bell.svg";
import { ReactComponent as PlusSvg } from "./icons/plus.svg";

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusSvg />} />
      <NavItem icon={<BellSvg />} />
      <NavItem icon={<MessengerSvg />} />
      <NavItem icon={<ArrowDown />}>
        {/* Dropdown */}
        <DropdownMenu />
        {/* Dropdown */}
      </NavItem>
    </Navbar>
  );
}

export default App;
