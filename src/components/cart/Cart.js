import React from "react";
// styles
import styles from './Cart.module.css';
//components
import Modal from "../UI/Modal";



const Cart = (props) => {

  const hideModal = () => {
    
    props.hideCart(false);
  }


  return ( 
    <Modal onClick={ hideModal }>
      Sushi
      <div className={ styles.amount }>
        <div>Total amount</div>
        <span>$35.79</span>
      </div>
      <div className={ styles.action }>
        <button className={ styles.closeBtn } onClick={ hideModal }>Close</button>
        <button className={ styles.orderBtn }>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;