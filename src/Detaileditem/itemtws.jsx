import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import './itemlist.css';

function Itemtws() {
  const [twss, setTwss] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9190/api/alltwsdata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTwss(data);
      })
      .catch((error) => {
        console.error('Error fetching TWS data:', error);
      });
  }, []);

  const addToWishlist = (twsId) => {
    fetch(`http://localhost:9190/api/addtowishlist/${twsId}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // You can handle success/failure here
        // Optionally, you can update the isInWishlist state for the respective tws item
        // Here you can add code to update the UI to reflect the change
      })
      .catch((error) => {
        console.error('Error adding to wishlist:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="item-list-container">
        <div className="item-list">
          {twss.map((item) => (
            <div key={item.id} className="item-container">
              <img className="itemimg" src={`data:image/png;base64,${item.image}`} alt={item.twsName} />
              <div className="item-details">
                <h3 className='prname'>{item.twsName}</h3>
                <p className="description">{item.description}</p>
                <div className="price"> ₹{item.price}</div>
                <div className="bottom-icons">
                  <FontAwesomeIcon
                    icon={wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? faHeartSolid : faHeartRegular}
                    className="liked"
                    onClick={() => addToWishlist(item.id)}
                  />
                  <FontAwesomeIcon icon={faCartShopping} className="carted" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Itemtws;
