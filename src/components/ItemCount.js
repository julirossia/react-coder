import React, { useState } from "react";
import "../App.scss";


function Adder({initial,stock, onAdd}) {
  const [clicks, setClicks] = useState(initial);
  
  function more() {
  if(clicks < stock){
      setClicks(clicks + onAdd);
      console.log(`usuario agregó ${clicks} productos`);
    }else{
      alert("no hay stock disponible");
    }
  }
  
  function less() {
    if(clicks > 0){
    setClicks(clicks - onAdd);
    console.log(`usuario eliminó ${clicks} productos`);
  }
}

  return (
    <>
      <div className="more">
        <i class="fas fa-minus-square" onClick={less}></i>
        <p>({clicks})</p>
        <i class="fas fa-plus-square" onClick={more}></i>
      </div>
      <button className="add" onClick={() => setClicks(alert(`Has añadido ${clicks} productos al carro de compras`))}>Agregar</button>
    </>
  );
} 

export default function ItemCount() {

  return (
    <>
     <Adder initial={1} stock={10} onAdd={1}/>
   </>
  );
}
