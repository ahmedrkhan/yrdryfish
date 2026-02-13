import { createContext, useState } from "react";
import productsData from "../data/products.js";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <ProductContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
}
