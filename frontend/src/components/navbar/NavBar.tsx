import "./navBar.scss";

const Navbar = () => {
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
        <a href="/">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
