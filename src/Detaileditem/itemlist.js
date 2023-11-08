import React from 'react';
import myImage from './toy4.webp';
import './itemlist.css';


function ItemList() {
  // Sample items
  const items = [
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
    { id: 1, name: 'Item 1', price: 10, image: myImage },
  ];

  return (
    <div className="item-list-container">
      
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-container">
            <img className="itemimg" src={item.image} alt={item.name} /> {/* Display the imported image */}
            <div className="item-details">
              <h3>{item.name}</h3>
              <div className="price">Price: ${item.price}</div>
            </div>
          </div>
        ))}
     </div>
    </div>
  );
}

export default ItemList;

