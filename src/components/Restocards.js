



const Restocards=(props)=>{
  const { resData } = props;
  const { image, name, description, rating, price, category } = resData;
  return (
    <div className="res-cards">
      <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
    <p>⭐ {rating} | ₹{price}</p>
    <span>{category}</span>
    </div>
  );
}
export default Restocards;