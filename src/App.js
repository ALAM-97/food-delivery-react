import React from 'react';
// styles
import './App.css';
// components
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Info />
    </div>
  );
}

export default App;
