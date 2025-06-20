import React from "react";
import logo from "./images/logo.svg";
import sunIcon from "./images/icon-sun.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <img className="sunIcon" src={sunIcon} alt="" />
    </header>
  );
}
