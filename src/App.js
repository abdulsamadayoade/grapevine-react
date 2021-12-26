import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Showcase from './components/Showcase/Showcase';
import Collection from './components/Collection/Collection';
import Product from './components/Product/Product';

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Collection />
      <Product />
    </>
  );
}

export default App;
