import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{ padding: "20px" }}>
            {/* Hero Section */}
            <div className="hero-banner">
                <video src="./hero-banner-video.mp4" autoPlay loop muted playsInline></video>
                <div className="hero-overlay">
                    <Link to="/products">
                        <button>Explore Products</button>
                    </Link>
                </div>
            </div>

            {/* Featured Products */}
            <section className="featured-section">
                <h2 className="featured-title">Featured Products</h2>

                <div className="featured-products-grid">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>

                <Link to="/products" className="featured-link">
                    <button className="featured-btn">
                        View All Products
                    </button>
                </Link>
            </section>


            {/* Why Choose Us */}
            <section className="why-section">
                <h2 className="why-title">Why Choose YRDRYFISH?</h2>

                <div className="why-grid">
                    <div className="why-card">
                        <h3>Premium Quality</h3>
                        <p>Only the freshest dry fish sourced from trusted suppliers.</p>
                    </div>

                    <div className="why-card">
                        <h3>Fast Delivery</h3>
                        <p>Get your order delivered fresh and on time, every time.</p>
                    </div>

                    <div className="why-card">
                        <h3>Customer Support</h3>
                        <p>We are always ready to help with any query or concern.</p>
                    </div>
                </div>
            </section>


            {/* howitworks */}
            <section className="howitwork">
                <h2>How YR Dry Fish Works</h2>
                <div className="howitworks-section">

                    <div className="howitworks-card">
                        <h3>1. Select Your Fish</h3>
                        <p>
                            Browse our collection of premium-quality dry fish sourced directly
                            from coastal fishermen. Choose the type, quantity, and packaging
                            that fits your needs.
                        </p>
                    </div>

                    <div className="howitworks-card">
                        <h3>2. We Clean & Pack Hygienically</h3>
                        <p>
                            Every order is carefully cleaned, sun-dried using traditional methods,
                            and packed in airtight, food-grade packaging to preserve freshness
                            and authentic flavor.
                        </p>
                    </div>

                    <div className="howitworks-card">
                        <h3>3. Fast & Safe Delivery</h3>
                        <p>
                            Your order is securely shipped to your doorstep with reliable
                            delivery partners, ensuring the product reaches you fresh and
                            ready to cook.
                        </p>
                    </div>

                </div>
            </section>


            {/* Testimonials */}
            <section className="testimonial-wrapper">
                <h2>What Our Customers Say</h2>

                <div className="testimonial-section">

                    <div className="testimonial-card">
                        <p>
                            “Ordered Kardi and Jawla. The aroma and taste were
                            exactly like coastal homemade quality. Packaging was clean and
                            completely sealed.”
                        </p>
                        <strong>— Ahmed Rahman, Kalyan</strong>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Delivery arrived within 3 days. The fish was properly dried,
                            not overly salty, and very fresh. Definitely ordering again
                            for my family.”
                        </p>
                        <strong>— Fatima Shaikh, Mumbai</strong>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Tried the dried prawns for curry. Texture and flavor were
                            excellent. Much better than what I find in local markets.”
                        </p>
                        <strong>— Imran K., Hyderabad</strong>
                    </div>

                </div>
            </section>


            {/* Call to Action */}
            <section className="call-to-action">
                <h2>Ready to Shop?</h2>
                <Link to="/products">
                    <button>Browse Products</button>
                </Link>
            </section>


            <section className="about-section" id="about-section">

                <div className="about-container">
                    <h2 className="about-title">About YRDRYFISH</h2>

                    <p className="about-text">
                        YRDRYFISH is committed to bringing you the finest quality dry fish directly from trusted suppliers.
                        Our team carefully selects and processes each product to ensure maximum freshness, taste, and nutritional value.
                        With fast delivery, secure payment options including COD and UPI, and a focus on customer satisfaction,
                        we aim to make premium dry fish accessible to your kitchen with ease and convenience.
                    </p>

                    <p className="about-text">
                        Founded with passion and a love for seafood, YRDRYFISH combines traditional drying methods with modern logistics
                        to serve customers across India. Join our community of satisfied customers and experience quality you can trust.
                    </p>
                </div>

            </section>


        </div>
    );
}
