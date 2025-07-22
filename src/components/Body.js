import Restocards from "./Restocards";
import { useEffect, useState } from "react";


const Body = () => {

const [ResList, setResList] = useState([])

useEffect(() => {
  fetchData()
}, []);


const fetchData = async () => {
  try {
    const data = await fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0330&lng=73.0297&page_type=DESKTOP_WEB_LISTING"
        )
    );

    const json = await data.json();
    console.log(json);

    const restaurantList =
      json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResList(restaurantList || []);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


  return (
    <div className="body">
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Search restaurants..."
        />
        <button className="filter-btn" onClick={() => {
            const filtered = ResList.filter(item => item.rating >= 4.5);
            setResList(filtered);
        }}>Top Rated Restaurants</button>
      </div>

      <div className="main-content">
        <div className="res-container">
         {ResList.map((Data) => (
  <Restocards key={Data.info.id} resData={Data.info} />
))}

        </div>
      </div>
    </div>
  );
};

export default Body;
