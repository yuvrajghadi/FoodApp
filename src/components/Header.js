import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/"><img src={LOGO_URL} alt="Logo" /></Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <span className="nav-status">{onlineStatus ? "🟢" : "🔴"}</span>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/cart" className="nav-item">Cart</Link>
        <button className="login" onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Sign Out" : "Sign In"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav-wrapper">
        {/* Top Row: Online + SignIn/Out + Hamburger */}
        <div className="mobile-top">
          <span className="nav-status">{onlineStatus ? "🟢" : "🔴"}</span>
          <button className="login mobile-login" onClick={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? "Sign Out" : "Sign In"}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Dropdown only About, Contact, Cart */}
        {isOpen && (
          <div className="mobile-dropdown">
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <Link to="/cart" className="nav-item">Cart</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
