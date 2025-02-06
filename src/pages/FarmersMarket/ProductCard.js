import React from "react";
import "./styles.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>by {product.farmer}</p>
      <p>{product.description}</p>
      <p>₹{product.price}/{product.unit}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">🛒 Add to Cart</button>
    </div>
  );
};

export default ProductCard;
