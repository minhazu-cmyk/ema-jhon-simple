import React from 'react';

import './App.css';
import Header from './component/Header/Header'
import Shop from './component/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './component/order/Order';
import Manage from './component/manage/Manage';
import NotFound from './component/notfound/NotFound';
import ProductDetails from './component/productDetails/ProductDetails';

function App() {
  return (
    <div>
   <Header></Header>
   <Router>
   
     <Switch>
       <Route path="/shop">
         <Shop></Shop>
 </Route>
 <Route path="/order">
 <Order></Order>
 </Route>
 <Route path="/manage">
<Manage></Manage>
 </Route>
 <Route exact path="/">
<Shop></Shop>
 </Route>
<Route path="/product/:productKey">
<ProductDetails></ProductDetails>
</Route>
<Route path="*">
<NotFound></NotFound>
</Route>

     </Switch>
   </Router>
   </div>
  );
}

export default App;
