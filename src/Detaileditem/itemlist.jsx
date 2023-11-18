import React from 'react';
import myImage from '../assets/headphone1.jpg';
import './itemlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import { useState,useEffect, } from 'react';

function ItemList() {
  const [headphones, setHeadphones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9190/api/allheadphonedata') // Replace with your backend URL
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
        console.error('Error fetching PC data:', error);
      });
  }, []);

  
  return (
<>
    <Navbar></Navbar>

    
    
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

    <FontAwesomeIcon icon={faHeart} className="liked" />
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
export default ItemList;