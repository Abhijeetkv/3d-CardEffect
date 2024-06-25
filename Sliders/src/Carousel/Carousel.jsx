import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const itemCount = 4;

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  useEffect(() => {
    const autoPlay = setInterval(next, 5000);
    return () => clearInterval(autoPlay);
  }, [activeIndex]);

  return (
    <section className="carousel">
      <div className="list">
        {[...Array(itemCount)].map((_, index) => (
          <CarouselItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            itemCount={itemCount}
          />
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prev}>{'<'}</button>
        <button id="next" onClick={next}>{'>'}</button>
      </div>
    </section>
  );
};

export default Carousel;
