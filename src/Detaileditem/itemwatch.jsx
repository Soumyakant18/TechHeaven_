import React from 'react';
import mywatch1 from '../assets/swatch1.jpg';
import mywatch2 from '../assets/swatch3.jpg';
import mywatch3 from '../assets/swatch4.webp';
import mywatch4 from '../assets/swatch5.webp';
import mywatch5 from '../assets/swatch6.webp';
import mywatch6 from '../assets/swatch7.jpg';
import mywatch7 from '../assets/swatch9.webp';
import mywatch8 from '../assets/swatch10.webp';
import mywatch9 from '../assets/swatch11.webp';
import mywatch10 from '../assets/swatch12.jpeg';
import mywatch11 from '../assets/swatch13.jpg';
import mywatch12 from '../assets/swatch14.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

function ItemWatch() {
  const watch = [
    { id: 1, name: 'Pebble', description: 'Elegant smartwatch with advanced health tracking features.', price: 1499, image: mywatch1 },
    { id: 2, name: 'Boat', description: 'Stylish and durable smartwatch with long battery life.', price: 1499, image: mywatch2 },
    { id: 3, name: 'Firebolt', description: 'Feature-rich smartwatch with a vibrant display and customizable faces.', price: 1499, image: mywatch3 },
    { id: 4, name: 'Boat', description: 'Water-resistant smartwatch designed for active lifestyles.', price: 1499, image: mywatch4 },
    { id: 5, name: 'Firebolt', description: 'Slim and lightweight smartwatch with fitness tracking capabilities.', price: 1499, image: mywatch5 },
    { id: 6, name: 'Noise', description: 'Fashionable smartwatch with a variety of watch faces and bands.', price: 1499, image: mywatch6 },
    { id: 7, name: 'Firebolt', description: 'Premium smartwatch with advanced fitness metrics and sleep tracking.', price: 1499, image: mywatch7 },
    { id: 8, name: 'Noise', description: 'Sleek and modern smartwatch with notifications and heart rate monitoring.', price: 1499, image: mywatch8 },
    { id: 9, name: 'Fastrack', description: 'Youthful smartwatch with customizable straps and sports modes.', price: 1499, image: mywatch9 },
    { id: 10, name: 'Noise', description: 'Versatile smartwatch suitable for both casual and fitness use.', price: 1499, image: mywatch10 },
    { id: 11, name: 'Samsung', description: 'High-end smartwatch with a rotating bezel and comprehensive health features.', price: 1499, image: mywatch11 },
    { id: 12, name: 'Firebolt', description: 'Fashion-forward smartwatch with a range of color options.', price: 1499, image: mywatch12 }
  ];

  return (
    <>
      <Navbar></Navbar>

      <div className="item-list-container">
        <div className="item-list">
          {watch.map((item) => (
            <div key={item.id} className="item-container">
              <img className="itemimg" src={item.image} alt={item.name} />
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

export default ItemWatch;
