import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20250218/original/pngtree-unique-food-logo-png-image_20457892.png" alt="Food Delivery Logo" />

      </div>
      <div className="nav-items">
       <span className="nav-item">Home</span>
       <span className="nav-item">About</span>  
        <span className="nav-item">Contact</span>
        <span className="nav-item">Cart</span>
      </div>
    </div>
  );
};

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

const ResList =[
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://allforpizza.com/wp-content/uploads/2022/07/1460A7EC-CF3B-40E8-B05F-A21E12E85EC6.jpeg",
    rating: 4.5,
    price: 199,
    category: "Pizza",
    description: "Classic cheese pizza with fresh basil and tomato sauce."
  },
  {
    id: 2,
    name: "Butter Chicken",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
    rating: 4.8,
    price: 299,
    category: "Indian",
    description: "Creamy tomato-based curry with tender chicken pieces."
  },
  {
    id: 3,
    name: "Veg Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeBlIywcv4RMaVlvzAk-ygkpjyiX0juwM6Q&s",
    rating: 4.2,
    price: 179,
    category: "Rice",
    description: "Fragrant basmati rice cooked with mixed vegetables and spices."
  },
  {
    id: 4,
    name: "Cheeseburger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFExWftHhBK07UkiHZykqbo1RFUZEa2ecFgg&s",
    rating: 4.7,
    price: 249,
    category: "Burger",
    description: "Juicy beef patty with melted cheese, lettuce, and tomatoes."
  },
  {
    id: 5,
    name: "Masala Dosa",
    image: "https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled.jpg",
    rating: 4.3,
    price: 129,
    category: "South Indian",
    description: "Crispy rice crepe filled with spiced mashed potatoes."
  },
  {
    id: 6,
    name: "Sushi Platter",
    image: "https://m.media-amazon.com/images/I/71Tq21fHSgL._UF894,1000_QL80_.jpg",
    rating: 4.9,
    price: 499,
    category: "Japanese",
    description: "Assorted sushi rolls with fresh fish and vegetables."
  },
  {
    id: 7,
    name: "Chicken Shawarma",
    image: "https://recipe30.com/wp-content/uploads/2022/07/Shawarma-848x477.jpg",
    rating: 4.6,
    price: 229,
    category: "Middle Eastern",
    description: "Grilled chicken wrapped in pita bread with garlic sauce and veggies."
  },
  {
    id: 8,
    name: "Pad Thai",
    image: "https://twokooksinthekitchen.com/wp-content/uploads/2021/02/pad-thai-500x500.jpg",
    rating: 4.4,
    price: 199,
    category: "Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce."
  },
  {
    id: 9,
    name: "Tandoori Paneer",
    image: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2023/07/Paneer-Tikka-Kebabs-on-a-platter-with-fresh-naan-bread-735x1103.jpg",
    rating: 4.7,
    price: 189,
    category: "Indian",
    description: "Char-grilled paneer cubes marinated in spicy tandoori masala."
  },
  {
    id: 10,
    name: "Ramen Bowl",
    image: "https://cd741428.delivery.rocketcdn.me/wp-content/uploads/2024/11/HOM.jpg",
    rating: 4.8,
    price: 349,
    category: "Japanese",
    description: "Hot noodle soup with boiled egg, seaweed, and pork slices."
  },
  {
    id: 11,
    name: "Caesar Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1R8p3R9He4pjuRnYbnWhjwKj8aK1hIIi3g&s",
    rating: 4.3,
    price: 149,
    category: "Salad",
    description: "Fresh lettuce with Caesar dressing, croutons, and parmesan cheese."
  },
  {
    id: 12,
    name: "Tacos Al Pastor",
    image: "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
    rating: 4.6,
    price: 209,
    category: "Mexican",
    description: "Corn tortillas filled with marinated pork, pineapple, and cilantro."
  }
];




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






const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
     <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
