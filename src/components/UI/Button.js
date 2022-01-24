import React from "react";
// styles
import styles from './Button.module.css';

const Button = (props) => {
  return ( 
    <button className={ `${ styles.className } ${ styles.button } ` } type={ props.type }>{ props.value }</button>
  );
}

export default Button;