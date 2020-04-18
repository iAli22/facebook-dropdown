import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";

// Svg
import { ReactComponent as ArrowBack } from "../icons/back.svg";
import { ReactComponent as SettingsSvg } from "../icons/settings.svg";

function DropdownMenu() {
  const [activeMenu, setactiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        classNames="menu-primary"
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsSvg />}
            goToMenu="settings"
            setactiveMenu={setactiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        classNames="menu-secondary"
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<ArrowBack />}
            goToMenu="main"
            setactiveMenu={setactiveMenu}
          >
            My Profile
          </DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
