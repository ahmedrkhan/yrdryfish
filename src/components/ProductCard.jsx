import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  const mainImage = product.images?.[0];

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          className="product-image"
          src={mainImage}
          alt={product.name}
        />
      </Link>

      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
