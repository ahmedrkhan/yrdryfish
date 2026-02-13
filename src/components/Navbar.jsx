import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [showBanner, setShowBanner] = useState(true); // ← THIS WAS MISSING

  const totalItems =
    cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <>
      {showBanner && (
        <div className="announcement-bar">
          <div className="scroll-text">
            🚚 Online delivery available only in Mumbai. 
            Outside Mumbai orders accepted only for bulk purchases.
          </div>

          <button
            className="close-btn"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/about" className="about-link">About</Link>
      </nav>
    </>
  );
}
