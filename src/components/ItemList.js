import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => {
        // Extract info object from API data
        const info = item?.card?.info || {};

        // Determine price (Swiggy gives price in paise, so divide by 100)
        const displayPrice = (info.price || info.defaultPrice || 0) / 100;

        // Ratings info
        const rating = info.ratings?.aggregatedRating?.rating || "N/A";
        const ratingCount =
          info.ratings?.aggregatedRating?.ratingCountV2 || "0";

        // Image URL (Swiggy CDN)
        const image = info.imageId
          ? `https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`
          : "";

        // Veg / Non-veg classifier ("VEG" or "NONVEG")
        const vegType = info.itemAttribute?.vegClassifier;

        return (
          <div key={info.id || index} className="menu-item">
            {/* LEFT SIDE - Text Info */}
            <div className="menu-item-info">

              {/* Veg / Non-veg Icon */}
              <div className="veg-indicator">
                {vegType === "VEG" ? (
                  <div className="veg-dot">🟢</div> // Green dot for VEG
                ) : (
                  <div className="non-veg-dot">🔴</div> // Red dot for NONVEG
                )}
              </div>

              {/* Name */}
              <h3 className="item-name">{info.name}</h3>

              {/* Price */}
              <p className="item-price">₹{displayPrice}</p>

              {/* Rating */}
              <div className="rating">
                <span className="star">★ {rating}</span>
                <span className="rating-count">({ratingCount})</span>
              </div>

              {/* Description */}
              <p className="item-description">{info.description}</p>
            </div>

            {/* RIGHT SIDE - Image + Button */}
           {/* RIGHT SIDE - Image + Button */}
<div className="menu-item-image">
  {image && (
    <div className="image-wrapper">
      <img src={image} alt={info.name} />
      <button className="add-btn">ADD</button>
    </div>
  )}
  <span className="customisable">Customisable</span>
</div>

          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
