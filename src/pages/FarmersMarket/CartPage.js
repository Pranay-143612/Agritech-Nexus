import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CartPage = ({ cartItems = [], setCartItems }) => {
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      {/* Navbar with Cart Icon */}
      <nav className="navbar">
        <h1>Shopping Cart</h1>
        <Link to="/" className="back-button">← Back to Market</Link>
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
                  <p className="cart-item-price">₹{item.price} per {item.unit}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">✖</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ₹{getTotalPrice().toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
