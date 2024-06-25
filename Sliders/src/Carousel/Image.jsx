import React from 'react';
import './Image.css';

const imageData = [
  {
    src: 'https://raw.githubusercontent.com/HoanghoDev/starbucks_slider/main/images/1.png',
    caption: 'Caffe Latte, a new product',
  },
  {
    src: 'https://raw.githubusercontent.com/HoanghoDev/starbucks_slider/main/images/2.png',
    caption: 'Strawberry mocha, a new product',
  },
  {
    src: 'https://raw.githubusercontent.com/HoanghoDev/starbucks_slider/main/images/3.png',
    caption: 'Doppio espresso, a new product',
  },
  {
    src: 'https://raw.githubusercontent.com/HoanghoDev/starbucks_slider/main/images/4.png',
    caption: 'Matcha latte macchiato, a new product',
  },
];

const Image = ({ index }) => {
  if (index === undefined || index < 0 || index >= imageData.length) {
    return <div>No image found</div>;
  }

  const { src, caption } = imageData[index];

  return (
    <figure className="image">
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Image;