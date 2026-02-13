import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    address: ""
  });

  const handleOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const { name, phone, state, city, pincode, address } = form;
    if (!name || !phone || !state || !city || !pincode || !address) {
      alert("Fill all fields");
      return;
    }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      alert("Invalid phone number");
      return;
    }

    let message = `New Order:%0A%0A`;
    message += `Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `State: ${state}%0A`;
    message += `City: ${city}%0A`;
    message += `Pincode: ${pincode}%0A`;
    message += `Address: ${address}%0A%0A`;
    message += `Products:%0A`;

    cartItems.forEach((item) => {
      message += `- ${item.name} x${item.quantity} = ₹${
        item.price * item.quantity
      }%0A`;
    });

    message += `%0ATotal: ₹${totalPrice}%0A`;
    message += `Delivery: 2-3 days%0APayment: COD / UPI Available`;

    window.open(`https://wa.me/918009089273?text=${message}`, "_blank");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <br />
      <input
        placeholder="State"
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      />
      <br />
      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      />
      <br />
      <input
        placeholder="Pincode"
        value={form.pincode}
        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Full Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <br />

      <h3>Total: ₹{totalPrice}</h3>
      <p>Delivery: 2-3 days | Payment: COD / UPI Available</p>

      <button onClick={handleOrder}>Place Order (WhatsApp)</button>
    </div>
  );
}
