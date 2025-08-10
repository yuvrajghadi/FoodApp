
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import Deals from "./Deals";
import Manusearch from "./Manusearch";
import TopPicks from "./TopPicks";
import MenuItem from "./MenuItem"
import { useParams } from "react-router-dom"; 
import useRestraurantMenu from "../utils/useRestaurantManu";


const RestaurantMenu = () => {
   const {resId} = useParams();
   const  menuData  = useRestraurantMenu(resId);

  if (menuData === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    totalRatingsString,
    areaName,
  } = menuData?.cards?.[2]?.card?.card?.info || {};
  const {slaString} =
    menuData?.cards?.[2]?.card?.card?.info?.sla?.slaString || "";

    const itemCards =
  menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    console.log("Items Cards:", itemCards);

  return (
    <div className="menu-container">
      <div className="menu-card">
        <h1 className="menu-title">{name}</h1>
<div className="hotel-details">
        <p className="menu-rating">
          ⭐{avgRatingString} ({totalRatingsString}) .₹{((costForTwo ?? 0) / 100).toFixed(2)}

        </p>
      <p>{cuisines?.join(", ") || "N/A"}</p>

        <p>{areaName}</p>
        <p>{slaString}</p>
        </div>
        <Deals />
        <Manusearch />
        <TopPicks />
        <div className="bar"></div>
        {itemCards.map((item) => (
          <MenuItem className="res-card-link" key={item?.card?.info?.id} item={item} />
        ))}
      </div>
    </div>

  );
};

export default RestaurantMenu;
