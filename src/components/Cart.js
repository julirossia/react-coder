import React from 'react';
import '../App.scss';
import { useCartContext } from '../context/cartContex';

function Cart() {
    const { carts} = useCartContext();
    return <h2>Compra exitosa! Cantidad de items: {carts}</h2>;
}

export default Cart;
