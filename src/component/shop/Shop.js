import React, { useState } from 'react'
import fakeData from '../../fakeData';
import './shop.css'
// import Product from '../product/Product';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
 
    const firstdata10 = fakeData.slice(0,10);
   const[products, setProducts] = useState(firstdata10);
   const[cart,setCart]= useState([])

   const handleClick = (product)=>{
    console.log('product added',product);
    const newCart = [...cart, product];
    setCart(newCart);
}

    return (
        <div className="shopping-container">
            <div className="product">
                
             
                {

              products.map(x=> <Product handleClick={handleClick} item={x}></Product>)

                }

              
            </div>
            <div className="shopping-cart">
              <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;