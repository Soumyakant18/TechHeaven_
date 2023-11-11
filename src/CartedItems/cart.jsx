// Cart.js
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Product from './product';
import CartItem from './CartItem';
import Navbar from '../components/Navbar';
import CheckoutPage from './Checkout';
import './CartPage.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart-container">
      <Navbar />
      <h1>Shopping Cart</h1>

      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
        )}
        <p>Total Cost: RS: {totalCost}</p>
        <Link to="/Checkout">
          <button className="buy-now-button">Buy Now</button>
        </Link>
      </div>

      <Routes>
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} totalCost={totalCost} clearCart={clearCart} />}
        />
      </Routes>
    </div>
  );
}

export default Cart;
