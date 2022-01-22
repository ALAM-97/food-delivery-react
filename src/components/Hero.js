import React from "react";
// styles
import styles from './Hero.module.css';
import heroImage from '../img/food-hero.jpg';

const Hero = () => {
  return ( 
    <img src={ heroImage } className={ styles.hero } />
  );
}

export default Hero;