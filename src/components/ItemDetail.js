 import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from '../context/cartContex';
import '../App.scss';
import ItemCount from './ItemCount';



const getDescription = () => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res({
              id: 1,
              descrip:
                  'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi.',
          });
      }, 1500);
  });
};
function ItemDetail() {
    const [description, setDescription] = useState({});
  

  const {id} = useParams();
  console.log(id)

  useEffect(() => {
      console.log('Detalle de Producto');

      getDescription().then((res) => {
          setDescription(res);
          console.log(res);
      }, []);
  });
  
  return (
    <main className="card-container">

    <div className="cards" >
        <p><b>Descripción:</b>{description.descrip}</p>
        <ItemCount />
     </div>
     </main>
  );
}

export default ItemDetail;