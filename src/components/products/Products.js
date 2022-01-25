import React, { useContext } from "react";
import Card from "../UI/Card";
// styles
import styles from './Products.module.css';
// components
import StateContext from "../../store/state-context";
import SingleProduct from './SingleProduct';

const Products = () => {

  const ctx = useContext(StateContext);

  return ( 
    <Card className={ styles.productsCard }>
      <ul>
        { ctx.products.map( (prod) => (
            <SingleProduct 
              key={ prod.id }
              title={ prod.title }
              description={ prod.description }
              price={ prod.price }
            />
        ))}
      </ul>
    </Card>
  );
}

export default Products;