import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [mainMedia, setMainMedia] = useState({
    type: "image",
    src: product?.images?.[0],
  });


  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-page">
      <div>
        <h2 className="product-title">{product.name}</h2>

        <div className="product-gallery">
          {mainMedia.type === "image" ? (
            <img
              src={mainMedia.src}
              alt={product.name}
              className="main-image"
            />
          ) : (
            <video
              src={mainMedia.src}
              className="main-image"
              controls
              autoPlay
            />
          )}

          <div className="thumbnails">
            {product.images?.map((img, idx) => (
              <img
                key={`${product.id}-img-${idx}`}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={
                  mainMedia.type === "image" && mainMedia.src === img
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setMainMedia({ type: "image", src: img })
                }
              />
            ))}

            {product.video && (
              <div
                className={
                  mainMedia.type === "video" ? "selected video-thumb" : "video-thumb"
                }
                onClick={() =>
                  setMainMedia({ type: "video", src: product.video })
                }
              >
                ▶
              </div>
            )}
          </div>
        </div>

      </div>




      <div className="product-info">
        <p className="price">Price: ₹{product.price}</p>
        <p className="category">Category: {product.category || "N/A"}</p>
        {product.stock !== undefined && (
          <p className="stock">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        )}
        {product.rating && <p className="rating">Rating: {product.rating} ⭐</p>}
        <p className="description">{product.description}</p>

        <p className="delivery-info">Delivery: 2–3 days</p>
        <div className="payment-options">
          <span>COD Available</span>
          <span>UPI Payment Available</span>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
