import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
const Product = (props) => {
    //  console.log(props.product);
const {name, seller,stock,price, img} = props.item
    return (
        <div className="product-name">
        <div>
        <img src={img} alt=""/>
        </div>
         <div className="list">
         <h4 className="list-name">{name}</h4>
         <br/>
         <div className="footer">
         <p><small>by:{seller} </small></p>
         <p>${price}</p>
         <p><small>only{stock} in stock-order soon</small></p>

         <button className='btn' onClick={()=>props.handleClick(props.item)}
         ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
      </div>
        
    );
};

export default Product;