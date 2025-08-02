// src/components/MenuItem.js
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const info = item?.card?.info || {};
  const {
    name,
    price,
    defaultPrice,
    description,
    ratings,
    imageId,
    isVeg,
  } = info;

  const displayPrice = (price || defaultPrice) / 100;
  const imageUrl = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
    : "";

  return (
    <div className="menu-item">
      <div className="menu-item-left">
        <div className="veg-indicator">
          <div className={isVeg ? "veg-dot" : "non-veg-dot"}></div>
        </div>
        <h3 className="item-name">{name}</h3>
        <p className="item-price">₹{displayPrice}</p>
        {ratings?.aggregatedRating?.rating && (
          <p className="item-rating">
            ⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCount})
          </p>
        )}
        <p className="item-description">{description}</p>
      </div>

      <div className="menu-item-right">
        <div className="image-wrapper">
          {imageUrl && (
            <img className="item-image" src={imageUrl} alt={name} />
          )}
          <button className="add-btnn">ADD</button>
        </div>
        <p className="customisable-text">Customisable</p>
      </div>
    </div>
  );
};

export default MenuItem;
