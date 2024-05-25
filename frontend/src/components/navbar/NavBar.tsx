import { useState } from "react";
import "./navBar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav>
      <div className="nav-main">
        <a href="/" className="nav-logo">
          <img src="logo.png" alt="Logo" />
          <span>MyHome</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="nav-registration">
        <a href="/">Sign In</a>
        <a href="/" className="signUp">
          Sign Up
        </a>
        <div className="menuIcon" onClick={() => setShowMenu((prev) => !prev)}>
          <img src={showMenu ? "close.jpg" : "menu.png"} alt="" />
        </div>
        <div className={showMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/" className="signUp">
            Sign Up
          </a>
          <a href="/">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
