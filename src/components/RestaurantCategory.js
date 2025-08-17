import ItemList from "./ItemList";
import { useState } from "react";
import './index.css';


const RestaurantCategory=({data})=>{

    // console.log("RestrauntCategory data",data)
    const [showItems, setShowItems] = useState(true);

const handleClick=()=>{
    setShowItems(!showItems);
}

    return(
        <div className="items">
            <div >
                <div className="recommendation" onClick={handleClick}>
                      <span className="font-bold py-2 px-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow ">{data?.title || "Recommendation"} ({data?.itemCards?.length || 0}) </span>
            <span className="category-description">{showItems ? "🔻" : "🔺"}</span>
                </div>
              
                    <div className="">
                 {showItems && <ItemList items={data?.itemCards} />}
                </div>  
            </div>
             
        </div>
    );
}

export default RestaurantCategory;