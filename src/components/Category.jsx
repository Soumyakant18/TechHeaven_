import React from "react";
import './Category.css'
import Image1 from '../assets/banner.png'
import Image2 from '../assets/cat2.png'
import Image3 from '../assets/cat3.png'
import Image4 from '../assets/cat4.png'

const categories = [
  {
    name: '',
    image: Image1,
  },
  {
    name: '',
    image: Image2,
  },
  {
    name: '',
    image: Image3,
  },
  {
    name: '',
    image: Image4,
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
