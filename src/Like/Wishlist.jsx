import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';
import { Link } from 'react-router-dom';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9190/api/wishlist`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWishlistItems(data);
      })
      .catch((error) => {
        console.error('Error fetching wishlist items:', error);
      });
  }, []);

  

  const handleDelete = (itemId) => {
    fetch(`http://localhost:9190/api/deletefromwishlist/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete item from wishlist');
        }
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error('Error deleting item from wishlist:', error);
      });
  };


  
  const addToCart = (itemId) => {
    fetch(`http://localhost:9190/api/addtocart/${itemId}`, {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
    
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="wishlist-container">
          <div className="wishlist-items">
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty</p>
            ) : (
              <ul>
                {wishlistItems.map((item) => (
                  <li key={item.id}>
                    <div className="item-wrapper">
                      <img src={`data:image/png;base64,${item.image}`} alt={item.name} />
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="price">₹{item.price}</div>
                        <div className="item-actions">
                          <button onClick={() => handleDelete(item.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        <Link to="/buy"> <button onClick={() => addToCart(item.id)}>Add to Cart</button></Link> 
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
