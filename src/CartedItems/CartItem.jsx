import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <li className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">RS: {item.price}</span>
      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </li>
  );
}

export default CartItem;
