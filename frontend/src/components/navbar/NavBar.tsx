import { useState } from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const user = true;

  return (
    <nav>
      <div className="nav-main">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Logo" />
          <span>MyHome</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="nav-registration">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Mikheili Magla</span>
            <Link className="profileInfo" to="/profile">
              <div className="notification">2</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="signUp">
              Sign Up
            </a>
          </>
        )}

        <div className="menuIcon" onClick={() => setShowMenu((prev) => !prev)}>
          <img src={showMenu ? "/close.jpg" : "/menu.png"} alt="" />
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
