import Restocards from "./Restocards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ResList, setResList] = useState([]);
  
  const [loading, setLoading] = useState(true); // ✅ Add this line

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
  try {
    const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const proxyURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyURL);

    const response = await fetch(proxyURL);

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const json = await response.json();
    console.log("Fetched JSON:", json);

    const restaurantList = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResList(restaurantList || []);
  } catch (error) {
    console.error("Fetch error:", error);
    setResList([]); // fallback to empty
  } finally {
    setLoading(false);
  }
};
if (loading) return <Shimmer />;

  if (ResList.length === 0) return <Shimmer />;
  
  return (
    <div className="body">
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Search restaurants..."
        />
        <button
          className="filter-btn"
          onClick={() => {
            // ✅ Fixed: Corrected filtering logic using item.info.avgRating
            const filtered = ResList.filter(
              (item) => item.info.avgRating >= 4.5
            );
            setResList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="main-content">
        {
          ResList.map((Data) => (
            <Restocards key={Data.info.id} resData={Data.info} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
