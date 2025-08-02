import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import Deals from "./Deals";
import Manusearch from "./Manusearch";
import TopPicks from "./TopPicks";
import MenuItem from "./MenuItem"
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
   const {resId} = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   

    const swiggyURL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";

    const proxyURL =
      "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyURL);

    try {
      const response = await fetch(proxyURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Fetched restaurant menu:", data);

      setMenuData(data?.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

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
          ⭐{avgRatingString} ({totalRatingsString}) . ₹{costForTwo / 100}
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
