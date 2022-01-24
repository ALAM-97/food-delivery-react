import React from "react";
// styles
import styles from './Info.module.css';
// components
import Card from './UI/Card';

const Info = () => {
  return ( 
    <Card className={ styles.infoCard }>
      <h3 className={ styles.cardTitle } >Delicious Food, Delivered To You</h3>
      <p className={ styles.cardInfo } >Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p className={ styles.cardInfo } >All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </Card>
  );
}

export default Info;