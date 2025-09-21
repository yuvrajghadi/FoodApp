import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearItems());
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className="item-list">
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">Your cart is empty</div>
        ) : null}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;