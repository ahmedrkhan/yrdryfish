import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0)
    return <h2 style={{ padding: 20 }}>Cart is empty</h2>;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ₹{item.price} x {item.quantity}</p>

          <div className="quantity-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3 className="cart-total">Total: ₹{totalPrice}</h3>

      <div className="cart-actions">
        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
