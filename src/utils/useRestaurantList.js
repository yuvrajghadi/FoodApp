import { useEffect, useState } from "react";

const useRestaurantList = () => {

  // ✅ State variables
  const [ResList, setResList] = useState([]); // Stores filtered restaurant list
  const [allResList, setAllResList] = useState([]); // Stores complete restaurant list
  const [loading, setLoading] = useState(true); // Loading state to manage shimmer/loader

  useEffect(() => {
    fetchData(); // ✅ Call fetchData when component mounts
  }, []);

  const fetchData = async () => {
    try {
      // ✅ Added Swiggy API URL with lat/lng params
      const swiggyURL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      
      // ✅ Added proxy to bypass CORS restrictions
      const proxyURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyURL);

      const response = await fetch(proxyURL);

      // ✅ Added error handling for HTTP errors
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const json = await response.json();

      // ✅ Used optional chaining to safely access nested API data
      const restaurantList = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // ✅ Fallback to empty array if restaurantList is undefined
      setResList(restaurantList || []);
      setAllResList(restaurantList || []);

    } catch (error) {
      // ✅ Improved error logging
      console.error("Fetch error:", error);

      // ✅ Reset restaurant list to empty on error
      setResList([]);
    } finally {
      // ✅ Ensure loading is set to false after fetch (success or fail)
      setLoading(false);
    }
  };

  // ✅ Return state and setters so the hook can be reused anywhere
  return { ResList, allResList, loading, setResList, setAllResList };
}

export default useRestaurantList;

