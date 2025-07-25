// import Restocards from "./Restocards";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [ResList, setResList] = useState([]);
//   const [allResList, setAllResList] = useState([]); // ✅ Store full data
//   const [loading, setLoading] = useState(true);
//   const [isFiltered, setIsFiltered] = useState(false); // ✅ Toggle flag
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const swiggyURL =
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//       const proxyURL =
//         "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyURL);

//       const response = await fetch(proxyURL);

//       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

//       const json = await response.json();

//       const restaurantList = json?.data?.cards?.find(
//         (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//       )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//       setResList(restaurantList || []);
//       setAllResList(restaurantList || []); // ✅ Store original data
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setResList([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <Shimmer />;

//   if (ResList.length === 0) return <Shimmer />;

//   const handleFilterClick = () => {
//     if (isFiltered) {
//       // Show all restaurants again
//       setResList(allResList);
//     } else {
//       // Show only top-rated restaurants
//       const filtered = allResList.filter(
//         (item) => item.info.avgRating >= 4.5
//       );
//       setResList(filtered);
//     }
//     setIsFiltered(!isFiltered); // Toggle filter state
//   };

//   return (
//     <div className="body">
//       <div className="search-container">
//         <input
//           className="searchbar"
//           type="text"
//           value={searchText}
//           placeholder="Search restaurants..."
//           onChange={(e)=>{
//             setSearchText(e.target.value);
//             const filtered = allResList.filter((item) =>
//               item.info.name.toLowerCase().includes(e.target.value.toLowerCase())
//             );
//             allResList===filtered? setResList(allResList) : setResList(filtered);
//           }}
//         />
//         <button className="filter-btn" onClick={handleFilterClick}>
//           {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
//         </button>
//       </div>

//       <div className="main-content">
//         {ResList.map((Data) => (
//           <Restocards key={Data.info.id} resData={Data.info} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;










import Restocards from "./Restocards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ResList, setResList] = useState([]);
  const [allResList, setAllResList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const swiggyURL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const proxyURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyURL);

      const response = await fetch(proxyURL);

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const json = await response.json();

      const restaurantList = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResList(restaurantList || []);
      setAllResList(restaurantList || []);
    } catch (error) {
      console.error("Fetch error:", error);
      setResList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterClick = () => {
    if (isFiltered) {
      setResList(allResList);
    } else {
      const filtered = allResList.filter((item) =>
        parseFloat(item.info.avgRating) >= 4.5
      );
      setResList(filtered);
    }
    setIsFiltered(!isFiltered);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchText(search);
    const filtered = allResList.filter((item) =>
      item.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setResList(filtered);
  };

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          value={searchText}
          placeholder="Search restaurants..."
          onChange={handleSearch}
          
        />
        <button className="filter-btn" onClick={handleFilterClick}>
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      <div className="main-content">
        {ResList.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No restaurants found!</h2>
        ) : (
          ResList.map((Data) => (
            <Restocards key={Data.info.id} resData={Data.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;













