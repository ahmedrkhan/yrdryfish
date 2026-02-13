import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // use CartContext, not ProductContext
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import "../App.css";

export default function Products() {
    const { products } = useContext(ProductContext); // only products here
    const { addToCart } = useContext(CartContext); // cart actions from CartContext

    return (
        <div className="products-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/products/${product.id}`}>
                        <img
                            src={product.images ? product.images[0] : product.image}
                            alt={product.name}
                        />
                    </Link>

                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
