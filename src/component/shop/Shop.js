import React, { useState } from 'react'
import fakeData from '../../fakeData';
import './shop.css'
// import Product from '../product/Product';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
 import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
   const firstdata10 = fakeData.slice(0,10);
   const[products, setProducts] = useState(firstdata10);
   const[cart,setCart]= useState([])
  
   useEffect(()=>{
     const saveCart = getDatabaseCart();
     const productKey = Object.keys(saveCart);
     const previousCart = productKey.map(existingKey=>{
         const product = fakeData.find(pd=>pd.key===existingKey);
         product.quantity = saveCart[existingKey];
         return product;
     })
    setCart(previousCart);

   },[])


   const handleClick = (product)=>{
       const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key ===toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
        const count = sameProduct.quantity+1;
       sameProduct.quantity= count;
        const others = cart.filter(pd=>pd.key!== toBeAddedKey )
        newCart=[...others, sameProduct];
    }
    else{
        product.quantity=1;
        newCart=[...cart,product]
    }

    setCart(newCart);
   
     addToDatabaseCart(product.key, count);
}

    return (
        <div className="shopping-container">
            <div className="product">
                
             
                {

              products.map(x=> <Product key={x.key} showAddToCart={true} handleClick={handleClick} item={x}></Product>)

                }

              
            </div>
            <div className="shopping-cart">
              <Cart cart={cart}>  <Link to="/order">
            <button className="btn">review order</button>
            </Link></Cart>
            </div>
           
        </div>
    );
};

export default Shop;