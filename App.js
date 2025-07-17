import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20250218/original/pngtree-unique-food-logo-png-image_20457892.png" alt="Food Delivery Logo" />

      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main>
        {/* Other components will go here */}
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
