import React from 'react'
import tws1 from '../assets/tws1.jpg';
import tws2 from '../assets/tws2.webp';
import tws3 from '../assets/tws3.jpg';
import tws4 from '../assets/tws4.webp';
import tws5 from '../assets/tws5.jpg';
import tws6 from '../assets/tws6.webp';
import tws7 from '../assets/tws7.webp';
import tws8 from '../assets/tws8.jpg';
import tws9 from '../assets/tws9.webp';
import tws10 from '../assets/tws10.jpg';
import tws11 from '../assets/tws11.jpg';
import tws12 from '../assets/tws12.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

function Itemtws() {
  const tws = [
    { id: 1, name: 'Z-Tech', description: 'Premium true wireless earbuds with top-notch audio performance and advanced features.', price: 1299, image: tws1 },
    { id: 2, name: 'Realme', description: 'Stylish true wireless earbuds with a comfortable fit and innovative features.', price: 999, image: tws2 },
    { id: 3, name: 'Akg', description: 'Affordable true wireless earbuds with powerful sound specifications.', price: 899, image: tws3 },
    { id: 4, name: 'Bose', description: 'High-performance true wireless earbuds known for their smooth audio experience.', price: 1499, image: tws4 },
    { id: 5, name: 'iQOO', description: 'Gaming-centric true wireless earbuds with high-quality audio and low latency.', price: 1399, image: tws5 },
    { id: 6, name: 'Grado', description: 'Stylish true wireless earbuds with impressive audio capabilities.', price: 1199, image: tws6 },
    { id: 7, name: 'pTron', description: 'Budget-friendly true wireless earbuds offering great value for money.', price: 699, image: tws7 },
    { id: 8, name: 'JBL', description: 'Reliable true wireless earbud brand with a focus on durability and quality sound.', price: 1299, image: tws8 },
    { id: 9, name: 'Vivo', description: 'Elegant and user-friendly true wireless earbuds with the latest connectivity features.', price: 1099, image: tws9 },
    { id: 10, name: 'Boat', description: 'Compact true wireless earbuds with a powerful audio experience.', price: 1799, image: tws10 },
    { id: 11, name: 'hoco', description: 'Continuing the legacy of performance and sleek design in true wireless technology.', price: 999, image: tws11 },
    { id: 12, name: 'Jabra', description: 'Camera-centric true wireless earbuds with exceptional audio capabilities.', price: 1499, image: tws12 },
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
