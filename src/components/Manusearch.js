import React from "react";
import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <h2 className="menu-title">✧ MENU ✧</h2>

      <div className="menu-search-bar">
        <input
          type="text"
          placeholder="Search for dishes"
          className="menu-search-input"
        />
        <span className="menu-search-icon">🔍</span>
      </div>

      <div className="food-type-filter">
        <span className="veg-icon"></span>
        <span className="non-veg-icon"></span>
        <span className="bestseller-text">Bestseller</span>
      </div>
    </div>
  );
};

export default MenuHeader;
