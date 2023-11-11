import React from "react";
import './Category.css'
import Image1 from '../assets/banner.png'

const categories = [
  {
    name: 'Headphones',
    image: Image1,
  },
  {
    name: 'Laptops',
    image: Image1,
  },
  {
    name: 'Smartwatches',
    image: Image1,
  },
  {
    name: 'Smartphones',
    image: Image1,
  },
];


function Category() {
  return (
    <>
    
    <div className="main">
    <h1 >Categories</h1>
    <div className="category-section">
      {categories.map((category, index) => (
        <div key={index} className="category-box">
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}


export default Category
