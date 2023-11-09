import React from "react";
import './Featuredp.css'
import wireless_earphone from '../assets/wireless_earphone-removebg-preview.png'
import productImage1 from '../assets/banner.png';
const productsData = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10.99',
      image: productImage1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$14.99',
      image: productImage1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$19.99',
      image: productImage1,
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$9.99',
      image: productImage1,
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$12.99',
      image: productImage1,
    },
    {
      id: 6,
      name: 'Product 6',
      price: '$22.99',
      image: productImage1,
    },
    // {
    //   id: 7,
    //   name: 'Product 7',
    //   price: '$15.99',
    //   image: 'product7.jpg',
    // },
    // {
    //   id: 8,
    //   name: 'Product 8',
    //   price: '$8.99',
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