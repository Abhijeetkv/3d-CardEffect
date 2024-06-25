import React from 'react';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import './App.css';
import CarouselItem from './Carousel/CarouselItem';
import CarouselImage from './Carousel/Image';
import CarouselMainContent from './Carousel/MainContent';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <CarouselItem />
        <CarouselImage />
        <CarouselMainContent/>


      </main>
    </div>
  );
};

export default App;
