 import React, {useEffect, useState} from 'react';
import '../App.scss';
import { useCartContext } from '../context/cartContex';
import { getFirestore } from '../firebase'

function Cart() {
        const { carts, setCart } = useCartContext();
        const [items, setItems] = useState([]);

      
        const deleteProduct = (carts) => {
          setCart(carts.filter((carts, i) => i !== carts));
        };
  
    return (
        <main className='card-container'>
        <div className='cards' key={carts.id}>
            <h1>Carrito</h1>
            {carts.map((carts) => (
                <tr key={carts}>
                <p scope="col">Cantidad:{carts}</p>
                <p scope="col">Artículo:{carts.title}</p>
                <p scope="col">Precio:${carts.price}</p>
                <p scope="col">Total:${carts * carts.price}</p>
                <p scope="col"></p>
                 
                    <button
                      className="less"
                      onClick={() => deleteProduct(carts)}
                    >
                      X
                    </button>
            </tr>
              ))}
            </div>
        </main>
      );
}

export default Cart;


