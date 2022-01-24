import React from "react";
// styles
import styles from './Header.module.css';
//components
import Button from "./UI/Button";

const Header = () => {
  return ( 
    <header className={ styles.header }>
      <h1>React Meals</h1>
      <Button type="button" value="Cart" />
    </header>
  );
}

export default Header;