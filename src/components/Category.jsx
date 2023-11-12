import React from "react";
import { Link } from "react-router-dom";
import './Category.css'
import Image1 from '../assets/banner.png'
import Image2 from '../assets/cat2.png'
import Image3 from '../assets/cat3.png'
import Image4 from '../assets/cat4.png'

const categories = [
  {
    name: '',
    path: '/listitem',
    image: Image2,
  },
  {
    name: '',
    path: '/itempc',
    image: Image1 ,
  },
  {
    name: '',
    path: '/itemwatch',
    image: Image3,
  },
  {
    name: '',
    path: '/itemphone',
    image: Image4,
  },
];

function Category() {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <div className="main">
        <h1>Categories</h1>
        <div className="category-section">
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="category-box"
              onClick={handleClick}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
