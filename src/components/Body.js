import Restocards from "./Restocards";
import { ResList } from "../utils/MockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input className="searchbar" type="text" placeholder="Search restaurants..." />
      </div>

      <div className="main-content">
        <div className="res-container">
          {
          ResList.map((Data) => (
            <Restocards key={Data.id} resData={Data} />
          ))
          }
        </div>
      </div>
    </div> 
  );
};
export default Body;