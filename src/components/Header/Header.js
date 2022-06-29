import "./Header.css";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Icon from "../../assets/images/icon.png";

export default function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={Logo} alt={"rectangle"} />
      <div className="left-logo-container">
        <div className="left-logo">
          <img className="left-logo-icon" src={Icon} alt={"rectangle"} />
        </div>
        <div>
          <div className="left-text">{'Day 1'}</div>
          <div className="left-sub-text">{'of 5'}</div>
        </div>
      </div>
    </div>
  );
}
