import React, { useReducer, useState } from "react";
// styles
import styles from './SingleProduct.module.css';


const SingleProduct = (props) => {

  const [prodNumber, setProdNumber] = useState(0);

  const addHandler = () => {
    if ( prodNumber < 5) {
      setProdNumber(prodNumber + 1);
    }
  }

  const removeHandler = () => {
    if ( prodNumber > 0 ) {
      setProdNumber(prodNumber - 1);
    }
  }

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
          <input type="number" min="0" max="5" id="amount" value={ prodNumber } />
        </div>
        <div>
          <button 
            onClick={ addHandler } 
            className={ styles.prodButton }
          >
            Add
          </button>
          <button 
            onClick={ removeHandler } 
            className={ `${ styles.prodButton } ${ styles.removeBtn }` }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;