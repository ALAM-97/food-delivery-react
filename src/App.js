import React, { useState } from 'react';
// styles
import './App.css';
// components
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Products from './components/products/Products';
import StateContext from './store/state-context';
import Cart from './components/cart/Cart';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'Sushi',
    description: 'Finest fish and veggies',
    price: '$22.99'
  },
  {
    id: 2,
    title: 'Schnitzel',
    description: 'A german speciality!',
    price: '$16.50'
  },
  {
    id: 3,
    title: 'BBQ Burger',
    description: 'America, raw, meaty',
    price: '$12.99'
  },
  {
    id: 4,
    title: 'Green Bowl',
    description: 'Healty....and green',
    price: '$18.99'
  }
]

function App() {

const [products, setProducts] = useState(DUMMY_PRODUCTS);
const [isVisible, setIsVisible] = useState(false);

const toggleCart = (visibility) => {
  setIsVisible(visibility);
}

const hideCart = (hide) => {
  setIsVisible(hide);
}

  return (
    <StateContext.Provider
      value={{
        products: products,
      }}
    >
      { isVisible && <Cart hideCart={ hideCart } /> }
      <Header toggleCart={ toggleCart } />
      <main>
        <Hero />
        <Info />
        <Products />
      </main>
    </StateContext.Provider>
  );
}

export default App;
