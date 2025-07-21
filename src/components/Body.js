import Restocards from "./Restocards";
import { ResList1 } from "../utils/MockData";
import { useState } from "react";


const Body = () => {

const [ResList, setResList] = useState(ResList1)


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
        }}>Top Rated</button>
      </div>

      <div className="main-content">
        <div className="res-container">
          {ResList.map((Data) => (
            <Restocards key={Data.id} resData={Data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
