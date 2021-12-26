import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Showcase from './components/Showcase/Showcase';
import Collection from './components/Collection/Collection';

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Collection />
    </>
  );
}

export default App;
