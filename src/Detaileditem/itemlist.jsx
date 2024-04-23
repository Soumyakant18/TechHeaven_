import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import './itemlist.css';

function ItemList() {
  const [headphones, setHeadphones] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9190/api/allheadphonedata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setHeadphones(data);
      })
      .catch((error) => {
        console.error('Error fetching headphone data:', error);
      });
  }, []);

  const addToWishlist = (headphoneId) => {
    fetch(`http://localhost:9190/api/addtowishlist/${headphoneId}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          {headphones.map((item) => (
            <div key={item.id} className="item-container">
              <img className="itemimg" src={`data:image/png;base64,${item.image}`} alt={item.name} />
              <div className="item-details">
                <h3 className='prname'>{item.name}</h3>
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
<<<<<<< HEAD
          ))}
        </div>
      </div>
=======
            
          </div>
        ))}
     </div>
    </div>
>>>>>>> ff57b3875a3dcf329df2302e6543b08588ffc5d2
    </>
  );
}

export default ItemList;
