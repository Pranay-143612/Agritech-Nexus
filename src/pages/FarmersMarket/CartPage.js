import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CartPage = ({ cartItems, setCartItems }) => {
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const amount = getTotalPrice() * 100; // Amount in paise (Razorpay requires paise)

    try {
      // Create an order on your backend
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const { orderId } = await response.json();

      // Razorpay options
      const options = {
        key: "rzp_test_wBAHDV66do1lWQ", // Replace with your Razorpay API Key
        amount: amount, // Amount in paise
        currency: "INR",
        name: "Agritech Nexus",
        description: "Payment for your cart items",
        order_id: orderId,
        handler: function (response) {
          // Handle successful payment
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          alert("Order ID: " + response.razorpay_order_id);
        },
        prefill: {
          name: "John Doe", // Replace with logged-in user details if available
          email: "john@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#F37254",
        },
      };

      // Open Razorpay payment modal
      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", function (response) {
        // Handle payment failure
        alert("Payment Failed: " + response.error.description);
      });
    } catch (error) {
      console.error("Error initiating payment: ", error);
    }
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
            <button onClick={handleCheckout} className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
