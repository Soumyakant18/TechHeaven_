import React from "react";
import { Link } from "react-router-dom";
import './Category.css'
import Image1 from '../assets/banner.png'

const categories = [
  {
    name: 'Headphones',
    path: '/listitem',
    image: Image1,
  },
  {
    name: 'Laptops',
    path: '/itempc',
    image: Image1,
  },
  {
    name: 'Smartwatches',
    path: '/itemwatch',
    image: Image1,
  },
  {
    name: 'Smartphones',
    path: '/itemphone',
    image: Image1,
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
