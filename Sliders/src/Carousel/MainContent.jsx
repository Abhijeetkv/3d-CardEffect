import React from 'react';
import './MainContent.css';

const contentData = [
  {
    title: 'Caffe Latte, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    backgroundColor: '#9c4d2f',
  },
  {
    title: 'Strawberry mocha, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    backgroundColor: '#f5bfaf',
  },
  {
    title: 'Doppio espresso, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    backgroundColor: '#dedfe1',
  },
  {
    title: 'Matcha latte macchiato, a new product',
    price: '$20',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    backgroundColor: '#7eb63d',
  },
];

const MainContent = ({ index }) => {
  if (index === undefined || index < 0 || index >= contentData.length) {
    return <div>No content found</div>;
  }

  const { title, price, description, backgroundColor } = contentData[index];

  return (
    <div className="main-content" style={{ backgroundColor }}>
      <div className="content">
        <h2>{title}</h2>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
        <button className="addToCard">Add To Card</button>
      </div>
    </div>
  );
};

export default MainContent;