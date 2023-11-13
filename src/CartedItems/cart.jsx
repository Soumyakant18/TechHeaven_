// Cart.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CartPage.css';
import Navbar from '../components/Navbar';

const productsData = [
  { id: 1, name: 'Product 1', price: '$10.99' },
  { id: 2, name: 'Product 2', price: '$14.99' },
  { id: 3, name: 'Product 3', price: '$19.99' },
  // Add more products as needed
];

function Cart() {
  const { productId } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (productId) {
      const productDetails = getProductDetailsById(productId);
      if (productDetails) {
        setCart([...cart, productDetails]);
      }
    }
  }, [productId]);

  const getProductDetailsById = (id) => {
    return productsData.find((product) => product.id === parseInt(id, 10));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const totalCost = cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart-container">
      <Navbar />
      <div className="cart-wrapper">
        <h1>Your Cart</h1>
        <div className="cart">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="product-info">
                    <span className="product-name">{item.name}</span>
                    <span className="product-price">{item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-summary">
            <p>Total Cost: ${totalCost}</p>
            <div className="cart-buttons">
              <button onClick={clearCart}>Clear Cart</button>
              <Link to="/checkout">
                <button className="proceed-to-checkout-button">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
