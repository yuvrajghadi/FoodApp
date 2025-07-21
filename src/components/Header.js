import{ LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={ LOGO_URL} alt="Food Delivery Logo" />

      </div>
      <div className="nav-items">
       <span className="nav-item">Home</span>
       <span className="nav-item">About</span>  
        <span className="nav-item">Contact</span>
        <span className="nav-item">Cart</span>
      </div>
    </div>
  );
};
export default Header;