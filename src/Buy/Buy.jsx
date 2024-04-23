import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Delivery from '../contact/Delivery';
import { Link } from 'react-router-dom/dist';

function Buy() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9190/api/cart', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  

  const handleDelete = (itemId) => {
    fetch(`http://localhost:9190/api/deletefromcart/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete item from cart');
        }
        // Refresh cart items after successful deletion
        fetch('http://localhost:9190/api/cart', {
          method: 'GET',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setCartItems(data);
          })
          .catch((error) => {
            console.error('Error fetching cart items:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting item from cart:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="item-details">
                  <img src={`data:image/png;base64,${item.image}`} alt={item.phoneName} />
                  <h3>{item.phoneName}</h3>
                  <p>{item.description}</p>
                  <div className="price">₹{item.price}</div>
                 <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cnt"><Delivery /></div>

      

      <style>
        {`
          .cart-container {
            text-align:center;
            margin-left: 120px;
            margin-top: 20px;
            width:80%;
          }

          .item-details {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            flex-direction:column;
            align-items: center;
          }

          .item-details img {
            width: 200px;
            height: auto;
            margin-right: 10px;
          }

          .price {
            font-weight: bold;
          }

          button {
            margin-left: auto;
          }
         
        `}
      </style>
    </>
  );
}

export default Buy;
