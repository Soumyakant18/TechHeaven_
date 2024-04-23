import React from "react";
import './Featuredp.css'
import wireless_earphone from '../assets/wireless_earphone-removebg-preview.png'
import productImage1 from '../assets/pc2.jpg'
import productImage2 from '../assets/headphone4.webp'
import productImage3 from '../assets/pc1.jpg'
import productImage4 from '../assets/sphone10.jpeg'
import productImage5 from '../assets/swatch3.jpg'
import productImage6 from '../assets/tws3.jpg'

const productsData = [
    {
      id: 1,

      name: 'AXL SLAYBOOK',
      price: '₹10.99',

      image: productImage1,
      amount: 1,
    },
    {
      id: 2,

      name: 'LEAF 550H',
      price: '₹14.99',

      image: productImage2,
      amount: 1,
    },
    {
      id: 3,

      name: 'HP PAVILLION',
      price: '₹19.99',
 
      image: productImage3,
      amount: 1,
    },
    {
      id: 4,

      name: 'IPHONE 14',
      price: '₹9.99',

      image: productImage4,
      amount: 1,
    },
    {
      id: 5,

      name: 'BOAT RUNNER V3',
      price: '₹12.99',

      image: productImage5,
      amount: 1,
    },
    {
      id: 6,

      name: 'HAMMER H6',
      price: '₹22.99',

      image: productImage6,
      amount: 1,
    },
    // {
    //   id: 7,
    //   name: 'Product 7',
    //   price: '₹15.99',
    //   image: 'product7.jpg',
    // },
    // {
    //   id: 8,
    //   name: 'Product 8',
    //   price: '₹8.99',
    //   image: 'product8.jpg',
    // },
  ];
  
  function Featuredp() {
    return (
      <div className="featured-products">
        <h2>Featured Products</h2>
        
        <div className="product-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-box">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Featuredp;