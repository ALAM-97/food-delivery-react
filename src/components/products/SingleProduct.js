import React from "react";
// styles
import styles from './SingleProduct.module.css';
// components
import Button from "../UI/Button";

const SingleProduct = (props) => {
  return ( 
    <div className={ styles.singleProduct }>
      <div className={ styles.singleProductLeft }>
        <h4>{ props.title }</h4>
        <p>{ props.description }</p>
        <div>{ props.price }</div>
      </div>
      <div className={ styles.singleProductRight }>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
        </div>
        <Button className={ styles.prodButton } value="Add"></Button>
      </div>
    </div>
  );
}

export default SingleProduct;