import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Sign In");

  return (
    <div className="header">
      <div className="logo">
       <Link to="/"><img src={LOGO_URL} alt="Food Delivery Logo" /></Link>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/cart" className="nav-item">Cart</Link>
        <span className="nav-item">
          <button
            className="login"
            onClick={() => {
              isLoggedIn === "Sign In"
                ? setIsLoggedIn("Sign Out")
                : setIsLoggedIn("Sign In");
            }}
          >
            {isLoggedIn}
          </button>
        </span>
      </div>
    </div>
  );
};
export default Header;
