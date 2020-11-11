import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartWidget from './CartWidget';
import Cart from './Cart';
import "../App.scss";


function Navbar() {
/*   const cart = useCartContext
 */  return (
    <>
      <nav className="menu">
           <h3 className="logo">
            ecommerce-app
          </h3>
          <BrowserRouter>
          <Switch>

          <CartWidget/>
          <Route exact path='/cart'><Cart/></Route>
          </Switch>

          </BrowserRouter>

      </nav>
    </>
  );
}

export default Navbar;
