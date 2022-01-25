import React, { useState } from "react";
// styles
import styles from './Header.module.css';
//components


const Header = props => {

  const [cartProd, setCartProd] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(true);

  const cartHandler = () => {
    if (cartVisibility === false) {
      setCartVisibility(true);
    }

    props.toggleCart(cartVisibility);
  }

  return ( 
    <header className={ styles.header }>
      <h1>React Meals</h1>
      <button className={ styles.cartBtn } type="button" onClick={ cartHandler }>
        Your Cart
        <span className={ styles.cartProd }>{ cartProd }</span>
      </button>
    </header>
  );
}

export default Header;