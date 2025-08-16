
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import Deals from "./Deals";
import Manusearch from "./Manusearch";
import TopPicks from "./TopPicks";
import { useParams } from "react-router-dom"; 
import useRestraurantMenu from "../utils/useRestaurantManu";
import RestaurantCategory from "./RestaurantCategory";


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
//   const {slaString} =
//     menuData?.cards?.[2]?.card?.card?.info?.sla?.slaString || "";
//     console.log(menuData?.cards?.[2]?.card?.card?.info)
// console.log("SLA String:", slaString);
    const itemCards =
  menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  const categories = menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.["@type"]==
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];
  console.log("categories:", categories);

  return (
    <div className="menu-container">
      <div className="menu-card ">
        <h1 className="menu-title">{name}</h1>
<div className="hotel-details">
        <p className="menu-rating">
          ⭐{avgRatingString} ({totalRatingsString}) .₹{((costForTwo ?? 0) / 100).toFixed(2)}

        </p>
      <p>{cuisines?.join(", ") || "N/A"}</p>

        <p>{areaName}</p>
      
        </div>
        <Deals />
        <Manusearch />
        <TopPicks />
        <div className="bar"></div>
        {categories.map((category, index) => (
          <RestaurantCategory className="res-card-link" key={index} data={category?.card?.card} />
        ))}
      </div>
    </div>

  );
};

export default RestaurantMenu;
