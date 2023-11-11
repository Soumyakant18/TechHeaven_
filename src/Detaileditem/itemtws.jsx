import React from 'react'
import tws1 from '../assets/tws1.jpg';
import myphone2 from '../assets/tws2.webp';
import myphone3 from '../assets/tws3.jpg';
import myphone4 from '../assets/tws4.webp';
import myphone5 from '../assets/tws5.jpg';
import myphone6 from '../assets/tws6.webp';
import myphone7 from '../assets/tws7.webp';
import myphone8 from '../assets/tws8.jpg';
import myphone9 from '../assets/tws9.webp';
import myphone10 from '../assets/tws10.jpg';
import myphone11 from '../assets/tws11.jpg';
import myphone12 from '../assets/tws12.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

function Itemtws() {
  const tws = [
    { id: 1, name: 'Z-Tech', description: 'Premium true wireless earbuds with top-notch audio performance and advanced features.', price: 1299, image: tws1 },
    { id: 2, name: 'Realme', description: 'Stylish true wireless earbuds with a comfortable fit and innovative features.', price: 999, image: myphone2 },
    { id: 3, name: 'Akg', description: 'Affordable true wireless earbuds with powerful sound specifications.', price: 899, image: myphone3 },
    { id: 4, name: 'Bose', description: 'High-performance true wireless earbuds known for their smooth audio experience.', price: 1499, image: myphone4 },
    { id: 5, name: 'iQOO', description: 'Gaming-centric true wireless earbuds with high-quality audio and low latency.', price: 1399, image: myphone5 },
    { id: 6, name: 'Grado', description: 'Stylish true wireless earbuds with impressive audio capabilities.', price: 1199, image: myphone6 },
    { id: 7, name: 'pTron', description: 'Budget-friendly true wireless earbuds offering great value for money.', price: 699, image: myphone7 },
    { id: 8, name: 'JBL', description: 'Reliable true wireless earbud brand with a focus on durability and quality sound.', price: 1299, image: myphone8 },
    { id: 9, name: 'Vivo', description: 'Elegant and user-friendly true wireless earbuds with the latest connectivity features.', price: 1099, image: myphone9 },
    { id: 10, name: 'Apple', description: 'Compact true wireless earbuds with a powerful audio experience.', price: 1799, image: myphone10 },
    { id: 11, name: 'hoco', description: 'Continuing the legacy of performance and sleek design in true wireless technology.', price: 999, image: myphone11 },
    { id: 12, name: 'Jabra', description: 'Camera-centric true wireless earbuds with exceptional audio capabilities.', price: 1499, image: myphone12 },
];

  return (
    <>
    <Navbar></Navbar>

    <div className="item-list-container">
      <div className="item-list">
        {tws.map((item) => (
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

export default Itemtws;
