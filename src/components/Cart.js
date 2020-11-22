import React, {useEffect} from 'react';
import '../App.scss';
import { useCartContext } from '../context/cartContex';

function Cart() {
        const { carts, setCart, setClicks, clicks, id } = useCartContext();
      
        const deleteProduct = (id) => {
          setCart(carts.filter((carts, i) => i !== id));
        };
  
    return (
        <main className='card-container'>
        <div className='cards' key={carts}>
            <h1>Carrito</h1>
            {carts.map((carts, id) => (
                <tr key={id}>
                <p scope="col">Cantidad:{carts}</p>
                <p scope="col">Artículo:{carts.id}</p>
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
