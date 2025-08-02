import React, { useRef } from "react";
import "./TopPicks.css";

const dishes = [
  {
    name: "Mutton Roast",
    price: 250,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383757E.png", // Replace with real image
  },
  {
    name: "Chicken Biryani",
    price: 239,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png",
  },
  {
    name: "Mutton Biryani",
    price: 319,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383788E.png",
  },  {
    name: "Mutton Biryani",
    price: 319,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383788E.png",
  },
  // Add more dishes as needed
];

const TopPicks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-picks-section">
      <div className="top-picks-header">
        <h2>Top Picks</h2>
        <div className="arrows">
          <button onClick={() => scroll("left")}>&larr;</button>
          <button onClick={() => scroll("right")}>&rarr;</button>
        </div>
      </div>

      <div className="top-picks-carousel" ref={scrollRef}>
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.image} alt={dish.name} />
            <div className="dish-info">
              <p className="dish-name">{dish.name}</p>
              <p className="dish-price">₹{dish.price}</p>
            </div>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
