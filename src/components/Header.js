import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Sign In");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Food Delivery Logo" />
      </div>
      <div className="nav-items">
        <span className="nav-item">Home</span>
        <span className="nav-item">About</span>
        <span className="nav-item">Contact</span>
        <span className="nav-item">Cart</span>
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
