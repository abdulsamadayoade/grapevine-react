import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Showcase from './components/Showcase/Showcase';
import Collection from './components/Collection/Collection';
import Product from './components/Product/Product';
import Image from './components/Image/Image';
import Picks from './components/Picks/Picks';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Collection />
      <Product />
      <Image />
      <Picks />
      <Testimonials />
      <Gallery />
    </>
  );
}

export default App;
