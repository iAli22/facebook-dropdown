import React from "react";

function DropdownItem(props) {
  return (
    // eslint-disable-next-line
    <a
      href="#"
      className="menu-item"
      onClick={() => props.goToMenu && props.setactiveMenu(props.goToMenu)}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className=" icon-right ">{props.rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
