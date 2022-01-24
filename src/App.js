import React, { useState } from 'react';
// styles
import './App.css';
// components
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Products from './components/products/Products';
import StateContext from './store/state-context';

const DUMMY_PRODUCTS = [
  {
    title: 'Sushi',
    description: 'Finest fish and veggies',
    price: '$22.99'
  },
  {
    title: 'Schnitzel',
    description: 'A german speciality!',
    price: '$16.50'
  },
  {
    title: 'BBQ Burger',
    description: 'America, raw, meaty',
    price: '$12.99'
  },
  {
    title: 'Green Bowl',
    description: 'Healty....and green',
    price: '$18.99'
  }
]

function App() {

const [products, setProducts] = useState(DUMMY_PRODUCTS);

  return (
    <StateContext.Provider
      value={{
        products: products,
      }}
    >
      <Header />
      <main>
        <Hero />
        <Info />
        <Products />
      </main>
    </StateContext.Provider>
  );
}

export default App;
