import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import mypc1 from '../assets/pc1.jpg';
import mypc2 from '../assets/pc2.jpg';
import mypc3 from '../assets/pc3.jpg';
import mypc4 from '../assets/pc4.webp';
import mypc5 from '../assets/pc5.jpg';
import mypc6 from '../assets/pc6.jpg';
import mypc7 from '../assets/pc7.webp';
import mypc8 from '../assets/pc8.webp';
import mypc9 from '../assets/pc9.jpg';
import mypc10 from '../assets/pc10.jpeg';
import mypc11 from '../assets/pc3.jpg';
import mypc12 from '../assets/pc12.webp';

function Itempc() {
  const pc = [
    { id: 1, name: 'HP Laptop', description: 'High-performance laptop with the latest technology.', price: 35999, image: mypc1 },
    { id: 2, name: 'Alienware Gaming Laptop', description: 'Powerful gaming laptop for immersive gaming experiences.', price: 67999, image: mypc2 },
    { id: 3, name: 'HP Ultrabook', description: 'Sleek and lightweight ultrabook for on-the-go productivity.', price: 38999, image: mypc3 },
    { id: 4, name: 'MSI Creator Laptop', description: 'Laptop designed for content creators and professionals.', price: 78999, image: mypc4 },
    { id: 5, name: 'Lenovo ThinkPad', description: 'Business-class laptop with robust features and security.', price: 56999, image: mypc5 },
    { id: 6, name: 'ASUS ZenBook', description: 'Premium ultrabook with a stunning display and powerful performance.', price: 48999, image: mypc6 },
    { id: 7, name: 'HP Envy Laptop', description: 'Elegant and high-performance laptop with premium build quality.', price: 58999, image: mypc7 },
    { id: 8, name: 'Apple MacBook Pro', description: 'Flagship MacBook for professional users with top-notch specifications.', price: 98999, image: mypc8 },
    { id: 9, name: 'Apple MacBook Air', description: 'Lightweight and portable MacBook for everyday use.', price: 89999, image: mypc9 },
    { id: 10, name: 'ASUS ROG Strix Laptop', description: 'Gaming laptop with RGB lighting and high refresh rate display.', price: 64999, image: mypc10 },
    { id: 11, name: 'HP Pavilion Laptop', description: 'Versatile laptop for everyday tasks with a modern design.', price: 53999, image: mypc11 },
    { id: 12, name: 'ASUS VivoBook', description: 'Affordable and stylish laptop for general use.', price: 42999, image: mypc12 }
  ];

  return (
    <>
      <Navbar />
      <div className="item-list-container">
        <div className="item-list">
          {pc.map((item) => (
            <div key={item.id} className="item-container">
              <img className="itemimg" src={item.image} alt={item.name} />
              <div className="item-details">
                <h3 className="prname">{item.name}</h3>
                <p className="description">{item.description}</p>
                <div className="price">₹{item.price}</div>
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

export default Itempc;
