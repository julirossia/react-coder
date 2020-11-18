import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../context/cartContex';
import "../App.scss";

function Adder({ initial, stock, onAdd, min }) {
  const [clicks, setClicks] = useState(initial);
/*    const { items, setItems } = useContext(CartContext);
 */ 

  function more() {
    if (clicks < stock) {
      setClicks(clicks + min);
      console.log(`usuario agregó ${clicks} productos`);
    } else {
      alert("no hay stock disponible");
    }
  }

  function less() {
    if (clicks > 0) {
      setClicks(clicks - min);
      setTimeout(
        () => setClicks(alert("ESTA SEGURO QUE QUIERE ELIMINAR EL PRODUCTO?")),
        2000
      );

      console.log(`usuario eliminó ${clicks} productos`);
    }
  }


  const [isOpened, setIsOpened] = useState(true);
  function toggle() {
  /*   setClicks((value) => value + clicks);
    onAdd.clicks = clicks;
    setItems((value) => [...value, clicks]); */
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div>
      {isOpened && (
      <div>
      <div className="more">
        <i class="fas fa-minus-square" onClick={less}></i>
        <p>({clicks})</p>
        <i class="fas fa-plus-square" onClick={more}></i>
      </div>
      <button className="add" onClick={toggle}>
        Agregar
      </button>
      </div>
      )}
      {isOpened ||  (
        <div>
          <button className="add" onClick={() => onAdd(clicks)}>
            <Link to={`/cart`}>Terminar mi Compra</Link>
      
          </button>
        </div>
      )}
    </div>
  );
}

export default function ItemCount() {
  return (
    <>
      <Adder
        initial={1}
        stock={10}
        min={1}
        onAdd={(clicks) => alert(`Agregados al carrito: ${clicks}`)}
      />

    </>
  );
}
