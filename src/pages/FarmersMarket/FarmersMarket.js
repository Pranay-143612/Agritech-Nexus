import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./styles.css";

const FarmerMarket = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const products = [
    { id: 1, name: "Organic Tomatoes", price: 40, image: "https://th.bing.com/th/id/OIP.7sXD1I8TuX9VresgBYIzGgHaE7?rs=1&pid=ImgDetMain", farmer: "Sanjay", unit: "kg", description: "Fresh, locally grown organic tomatoes" },
    { id: 2, name: "Fresh Spinach", price: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800", farmer: "Anjali Patel", unit: "bunch", description: "Nutrient-rich green spinach leaves" },
    { id: 3, name: "Organic Rice", price: 60, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800", farmer: "Suresh Singh", unit: "kg", description: "Premium quality organic rice" },
    { id: 4, name: "Fresh Carrots", price: 35, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800", farmer: "Priya Sharma", unit: "kg", description: "Crisp and sweet organic carrots" },
    { id: 5, name: "Fresh Apples", price: 50, image: "https://5.imimg.com/data5/NC/NP/MY-50125407/apple-500x500.jpg", farmer: "Ravi Kumar", unit: "kg", description: "Sweet and juicy fresh apples" },
    { id: 6, name: "Organic Potatoes", price: 45, image: "https://www.greendna.in/cdn/shop/products/close-up-harvest-potatoes-162673_1024x1024@2x.jpg?v=1671694087", farmer: "Mohammed Ali", unit: "kg", description: "Farm fresh organic potatoes" },
    { id: 7, name: "Fresh Mangoes", price: 80, image: "https://3.imimg.com/data3/PB/IU/MY-2367427/fresh-mango-500x500.jpg" },
    { id: 8, name: "Organic Cucumbers", price: 25, image: "https://www.greendna.in/cdn/shop/products/cucumber_1_700x.jpg?v=1594219681", farmer: "Vikram Singh", unit: "kg", description: "Crisp and refreshing organic cucumbers" },
    { id: 9, name: "Fresh Strawberries", price: 60, image: "https://foodal.com/wp-content/uploads/2015/03/Make-Strawberry-Season-Last-All-Year.jpg", farmer: "Tanya Roy", unit: "kg", description: "Fresh and sweet organic strawberries" },
    { id: 10, name: "Organic Bell Peppers", price: 40, image: "https://www.greendna.in/cdn/shop/products/caps1_796x.jpg?v=1632670443", farmer: "Ramesh Patel", unit: "kg", description: "Vibrant and crisp organic bell peppers" },
  ];
  

  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="farmers-market">
      {/* Navbar with Cart Icon */}
      <nav className="navbar">
        <h1>Farmer's Market</h1>
        <NavLink to="/cart" className="cart-icon">
          🛒 <span className="cart-badge">{cartItems.length}</span>
        </NavLink>
      </nav>

      <input type="text" placeholder="Search products or farmers..." className="search-bar" />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default FarmerMarket;
