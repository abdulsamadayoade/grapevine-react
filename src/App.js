import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Collection from './components/Collection/Collection';
import Product from './components/Product/Product';
import Image from './components/Image/Image';
import Picks from './components/Picks/Picks';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Showcase />
      <Collection />
      <Product />
      <Image />
      <Picks />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
