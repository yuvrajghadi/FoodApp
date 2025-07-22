const Restocards = ({ resData }) => {
  return (
    <div className="res-card">
      <img 
        className="res-logo"
        src={
          resData.cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData.cloudinaryImageId
            : "https://via.placeholder.com/150"
        }
        alt={resData.name}
      />
      <h3>{resData.name}</h3>
      <p>⭐ {resData.avgRating} • {resData?.sla?.slaString}</p>
      <p>{resData.cuisines?.join(", ")}</p>
      <p>{resData.areaName}</p>
      <p>{resData.costForTwo}</p>
    </div>
  );
};

export default Restocards;