import { useEffect, useState } from "react";



const useRestraurantMenu = (resId) => {


     useEffect(() => {
    fetchData();
  }, [resId]);


    const [menuData, setMenuData] = useState(null);
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

      const json = await response.json();
        console.log("Menu Data:", json);
      setMenuData(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };


    return menuData;

};

export default useRestraurantMenu;