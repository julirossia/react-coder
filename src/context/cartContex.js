import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children }) {
 
    const [carts, setCarts] = useState(initialValue);
   
        function add(newCart) {
            if (!carts.find(c => c === newCart) && newCart) {
              setCarts([...carts, newCart]);
            } else {
              console.log(`Pokemon '${newCart}' not added`);
            }
          
    }
    function remove(removeCart) {
        const removedCarts = carts.filter(
            (carts) => carts.productName !== removeCart.productName,
        );
        setCarts(removedCarts);
    }
    return (
        <CartContext.Provider value={{ carts, add, remove }}>

            {children} 
        
        </CartContext.Provider>
    );
}

/*  */