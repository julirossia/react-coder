import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartWidget from './CartWidget';
import Cart from './Cart';
import {useCartContext} from '../context/cartContex';
import "../App.scss";


function Navbar() {
/*    const {cart, add, remove} = useCartContext()
 */   return (
    <>
      <nav className="menu">
           <h3 className="logo">
            ecommerce-app {/* {cart.length} */}
          </h3>
          <BrowserRouter>
          <Switch>

          <CartWidget />
          <Route exact path='/cart'><Cart/></Route>
          </Switch>

          </BrowserRouter>

      </nav>
    </>
  );
}

export default Navbar;
