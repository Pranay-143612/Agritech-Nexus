"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartPage({ cartItems, setCartItems }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_Px6RlHWJMzYk4Z");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    if (form) {
      form.innerHTML = ""; // Clear previous buttons
      form.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (form) {
        form.innerHTML = "";
      }
    };
  }, []);

  const [showPaymentForm, setShowPaymentForm] = React.useState(false);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <nav className="navbar">
        <h1>Shopping Cart</h1>
        <Link to="/" className="back-button">
          ← Back to Market
        </Link>
      </nav>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p className="cart-item-price">
                    ₹{item.price} per {item.unit}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  ✖
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ₹{getTotalPrice().toFixed(2)}</h2>

            {!showPaymentForm ? (
              <button 
                className="checkout-button"
                onClick={() => setShowPaymentForm(true)}
              >
                Proceed to Checkout
              </button>
            ) : (
              <form id="razorpay-form" className="w-full"></form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}