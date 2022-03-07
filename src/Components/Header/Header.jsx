import React from "react";
import Vazico from "../../icons/vaz.png";
import "./Header.css";
//import { ReactComponent as Vazico } from "../icons/vaz.svg";
const Header = () => {
  return (
    <header className="header">
      <a href="#"><img src={Vazico} alt="logo" /></a>
    </header>
  );
};
export default Header;
