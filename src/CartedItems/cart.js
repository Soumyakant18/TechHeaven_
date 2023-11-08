import React, { useState } from 'react';
import './CartPage.css'; // Import your CSS file
import ProductCard from './ProductCard'; // Create a ProductCard component for individual products
import CartItem from './CartItem'; // Create a CartItem component for cart items

function CartPage() {
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

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        )}
      </div>

      <div className="cart">
        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            )}
          </ul>
        )}
        <p>Total Cost: ${totalCost}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
