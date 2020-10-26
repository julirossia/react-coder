import React from "react";
import CartWidget from './CartWidget';
import "../App.scss";

function Navbar() {
  return (
    <>
      <nav className="menu">
           <h3 className="logo">
            ecommerce-app
          </h3>
          <CartWidget/>
      </nav>
    </>
  );
}

export default Navbar;
