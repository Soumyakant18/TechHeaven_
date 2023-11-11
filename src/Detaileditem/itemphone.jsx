import React from 'react'
import myphone1 from '../assets/sphone14.webp';
import myphone2 from '../assets/sphone2.png';
import myphone3 from '../assets/sphone3.webp';
import myphone4 from '../assets/sphone13.jpg';
import myphone5 from '../assets/sphone5.webp';
import myphone6 from '../assets/sphone6.webp';
import myphone7 from '../assets/sphone7.webp';
import myphone8 from '../assets/sphone8.webp';
import myphone9 from '../assets/sphone9.jpg';
import myphone10 from '../assets/sphone10.jpeg';
import myphone11 from '../assets/sphone13.jpg';
import myphone12 from '../assets/sphone12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

function iItemphone() {
  const phones = [
    { id: 1, name: 'OnePlus', description: 'Flagship killer with top-notch performance and camera.', price: 23999, image: myphone1 },
    { id: 2, name: 'Samsung', description: 'Premium smartphone with stunning display and innovative features.', price: 45999, image: myphone2 },
    { id: 3, name: 'Redmi', description: 'Affordable smartphone with powerful specifications.', price: 12999, image: myphone3 },
    { id: 4, name: 'OnePlus', description: 'High-performance device known for its smooth user experience.', price: 34999, image: myphone4 },
    { id: 5, name: 'iQOO', description: 'Gaming-centric phone with high refresh rate and powerful processor.', price: 26899, image: myphone5 },
    { id: 6, name: 'Vivo', description: 'Stylish phone with impressive camera capabilities.', price: 34699, image: myphone6 },
    { id: 7, name: 'Realme', description: 'Budget-friendly phone offering great value for money.', price: 18999, image: myphone7 },
    { id: 8, name: 'Motorola', description: 'Reliable smartphone brand with a focus on durability.', price: 17899, image: myphone8 },
    { id: 9, name: 'Apple', description: 'Elegant and user-friendly iPhone with the latest iOS features.', price: 94999, image: myphone9 },
    { id: 10, name: 'Apple', description: 'Compact iPhone with a powerful A-series chip.', price: 123999, image: myphone10 },
    { id: 11, name: 'OnePlus', description: 'Continuing the legacy of performance and sleek design.', price: 34699, image: myphone11 },
    { id: 12, name: 'Google Pixel', description: 'Camera-centric phone with exceptional photography capabilities.', price: 48799, image: myphone12 },
  ];
  return (
    <>
    <Navbar></Navbar>

    <div className="item-list-container">
      <div className="item-list">
        {phones.map((item) => (
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
  )
}

export default iItemphone;
