import React, { useState, useEffect } from 'react'
import Card from "../../components/ui/card"
import Button from "../../components/ui/button"
import Input from "../../components/ui/input"
import Label from "../../components/ui/label"
import './styles.css'

export default function FarmerMarket() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(savedCart)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 40,
      image: 'https://th.bing.com/th/id/OIP.7sXD1I8TuX9VresgBYIzGgHaE7?rs=1&pid=ImgDetMain',
      farmer: 'Sanjay',
      unit: 'kg',
      description: 'Fresh, locally grown organic tomatoes',
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      price: 30,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800',
      farmer: 'Anjali Patel',
      unit: 'bunch',
      description: 'Nutrient-rich green spinach leaves',
    },
    {
      id: 3,
      name: 'Organic Rice',
      price: 60,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
      farmer: 'Suresh Singh',
      unit: 'kg',
      description: 'Premium quality organic rice',
    },
    {
      id: 4,
      name: 'Fresh Carrots',
      price: 35,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800',
      farmer: 'Priya Sharma',
      unit: 'kg',
      description: 'Crisp and sweet organic carrots',
    },
    {
      id: 5,
      name: 'Fresh Apples',
      price: 50,
      image: 'https://5.imimg.com/data5/NC/NP/MY-50125407/apple-500x500.jpg',
      farmer: 'Ravi Kumar',
      unit: 'kg',
      description: 'Sweet and juicy fresh apples',
    },
    {
      id: 6,
      name: 'Organic Potatoes',
      price: 45,
      image: 'https://www.greendna.in/cdn/shop/products/close-up-harvest-potatoes-162673_1024x1024@2x.jpg?v=1671694087',
      farmer: 'Mohammed Ali',
      unit: 'kg',
      description: 'Farm fresh organic potatoes',
    },
    {
      id: 7,
      name: 'Organic Cucumbers',
      price: 25,
      image: 'https://www.greendna.in/cdn/shop/products/cucumber_1_700x.jpg?v=1594219681',
      farmer: 'Vikram Singh',
      unit: 'kg',
      description: 'Crisp and refreshing organic cucumbers',
    },
    {
      id: 8,
      name: 'Fresh Strawberries',
      price: 60,
      image: 'https://foodal.com/wp-content/uploads/2015/03/Make-Strawberry-Season-Last-All-Year.jpg',
      farmer: 'Tanya Roy',
      unit: 'kg',
      description: 'Fresh and sweet organic strawberries',
    },
    {
      id: 9,
      name: 'Organic Bell Peppers',
      price: 40,
      image: 'https://www.greendna.in/cdn/shop/products/caps1_796x.jpg?v=1632670443',
      farmer: 'Ramesh Patel',
      unit: 'kg',
      description: 'Vibrant and crisp organic bell peppers',
    },
  ]
  

  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id)
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.farmer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const ProductCard = ({ product }) => (
    <Card className="product-card">
      <Card.Header>
        <Card.Title>{product.name}</Card.Title>
        <Card.Description>by {product.farmer}</Card.Description>
      </Card.Header>
      <Card.Content className="product-card-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <p>{product.description}</p>
        <p className="product-price">₹{product.price}/{product.unit}</p>
        <Button onClick={() => addToCart(product)} className="add-to-cart-btn">
          🛒 Add to Cart
        </Button>
      </Card.Content>
    </Card>
  )

  const CartPage = () => (
    <div className="cart-container">
      <nav className="navbar">
        <h1 className="navbar-title">Shopping Cart</h1>
        <Button onClick={() => setShowCart(false)} variant="outline" className="back-button">
          ← Back to Market
        </Button>
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
                  <h2 className="cart-item-title">{item.name}</h2>
                  <p className="cart-item-price">₹{item.price} per {item.unit}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                </div>
                <Button onClick={() => removeFromCart(item.id)} variant="destructive" className="remove-button">
                  ✖ Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2 className="total-price">Total: ₹{getTotalPrice().toFixed(2)}</h2>
            <Button className="checkout-button">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="farmers-market">
      <nav className="navbar">
        <h1 className="navbar-title">Farmer's Market</h1>
        <Button onClick={() => setShowCart(true)} variant="outline" className="cart-icon">
          🛒 <span className="cart-badge">{cartItems.length}</span>
        </Button>
      </nav>
      <div className="search-bar-container">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Search products or farmers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      {showCart ? <CartPage /> : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
