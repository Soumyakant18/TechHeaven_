import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import CartContext

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use cartItems and removeFromCart method from CartContext

  return (
    <div className="cart-page">
      <h2>Cart Items</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img className="cart-item-img" src={`data:image/png;base64,${item.image}`} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div>Price: ₹{item.price}</div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
