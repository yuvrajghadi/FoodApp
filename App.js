import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20250218/original/pngtree-unique-food-logo-png-image_20457892.png" alt="Food Delivery Logo" />

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

const Restocards=()=>{
  return(
    <div className="res-cards">
      <img className="res-image" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Restaurant Image"/>
      <h3>MH07</h3>
    </div>
  )
}



const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="res-container"><Restocards/></div>
    </div>
  );
};





const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
     <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
