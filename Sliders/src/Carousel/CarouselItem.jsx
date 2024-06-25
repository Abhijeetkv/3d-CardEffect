import React from 'react';
import MainContent from './MainContent';
import Image from './Image';
import './CarouselItem';

const CarouselItem = ({ index, activeIndex, itemCount }) => {
  const classNames = ['item'];
  if (index === activeIndex) {
    classNames.push('active');
  } else if (index === (activeIndex - 1 + itemCount) % itemCount) {
    classNames.push('other_1');
  } else if (index === (activeIndex + 1) % itemCount) {
    classNames.push('other_2');
  }

  return (
    <article className={classNames.join(' ')}>
      <MainContent index={index} />
      <Image index={index} />
    </article>
  );
};

export default CarouselItem;
