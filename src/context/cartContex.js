import React, { useContext, useState} from 'react';

export const CartContext = React.createContext;

export const useCartContext =()=>useContext(CartContext);



export default function CartProvider ({ initialValue = [], children }) {
    const [carts, setCarts] = useState(initialValue)

    function add(newCart){
        const addCart = [...carts, newCart];
    carts(addCart);

    }
    function remove(removeCart){
const removedCarts = carts.filter(
    carts => carts.name !==removeCart.name
);
setCarts(removedCarts);
}
    return<CartContext.Provider value={{carts, add, remove}}>
        {children}
    </CartContext.Provider>
}