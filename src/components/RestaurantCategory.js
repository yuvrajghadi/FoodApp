import ItemList from "./ItemList";
import './index.css';


const RestaurantCategory=({data})=>{

    // console.log("RestrauntCategory data",data)
     
    return(
        <div className="items">
            <div >
                <div className="recommendation">
                      <span className="font-bold py-2 px-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow ">{data?.title || "Recommendation"} ({data?.itemCards?.length || 0}) </span>
            <span className="category-description">{"🔻"}</span>
                </div>
              
                    <div className="">
                 <ItemList items={data?.itemCards} />
                </div>  
            </div>
             
        </div>
    );
}

export default RestaurantCategory;