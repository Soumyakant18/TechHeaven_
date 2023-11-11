import React from 'react';
import myImage from '../assets/headphone1.jpg';
import './itemlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import myImage2 from '../assets/headphone3.webp';
import myImage3 from '../assets/headphone4.webp';
import myImage4 from '../assets/headphone5.png';
import myImage5 from '../assets/headphone6.jpg';
import myImage6 from '../assets/headphone7.webp';
import myImage7 from '../assets/headphone9.webp';
import myImage8 from '../assets/headphone10.png';
import myImage9 from '../assets/headphone11.webp';
import myImage10 from '../assets/headphone12.webp';
import myImage11 from '../assets/headphone13.jpg';
import myImage12 from '../assets/headphone14.webp';

function ItemList() {

  // Sample items
  const items = [
    { id: 1, name: 'Zebronics', description: 'High-quality headphones with noise-cancelling technology.', price: 1499, image: myImage },
    { id: 2, name: 'Phillips', description: 'Sleek and stylish earphones with crystal-clear sound.', price: 999, image: myImage2 },
    { id: 3, name: 'Leaf', description: 'Wireless Bluetooth earbuds for sports and outdoor activities.', price: 1189, image: myImage3 },
    { id: 4, name: 'Boat', description: 'Over-ear headphones with deep bass and comfortable fit.', price: 1599, image: myImage4 },
    { id: 5, name: 'Pebble', description: 'In-ear earphones with noise isolation and rich sound.', price: 1089, image: myImage5},
    { id: 6, name: 'Zebronics', description: 'Premium over-ear headphones with built-in microphone.', price: 1999, image: myImage6 },
    { id: 7, name: 'Marshallo', description: 'Wireless on-ear headphones with long battery life.', price: 2599, image: myImage7},
    { id: 8, name: 'Boat', description: 'Stylish in-ear earphones with tangle-free cables.', price: 1699, image: myImage8},
    { id: 9, name: 'Fastrack', description: 'Sleek and lightweight wireless headphones for active lifestyles.', price: 1399, image: myImage9},
    { id: 10, name: 'Reon', description: 'In-ear headphones with clear sound and comfortable ear tips.', price: 1689, image: myImage10},
    { id: 11, name: 'Pebble', description: 'Affordable earphones with a durable design and clear audio.', price: 899, image: myImage11 },
    { id: 12, name: 'Zebronics', description: 'Budget-friendly in-ear headphones with enhanced bass.', price: 959, image: myImage12 }
  ];

  return (
<>
    <Navbar></Navbar>

    
    
    <div className="item-list-container">
      
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-container">
            <img className="itemimg" src={item.image} alt={item.name} /> {/* Display the imported image */}
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