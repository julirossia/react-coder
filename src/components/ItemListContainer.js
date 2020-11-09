import React, { useState, useEffect, useParams } from "react";
 import '../App.scss';
import {Link} from 'react-router-dom';

const getItem = ()=>{
  return new Promise((res,rej)=>{
    setTimeout(() => {

res ([
{id: 1, productName:"Producto 1", precio:500},
{id: 2, productName:"Producto 2",precio:600},
{id: 3, productName:"Producto 3",precio:850},
{id: 4, productName:"Producto 4",precio:550},
{id: 5, productName:"Producto 5",precio:750},
{id: 6, productName:"Producto 6",precio:590}

]);
}, 1500);
});
};
function ItemListContainer() {
  const [items, setItems] = useState([]);
/*    const {ids} = useParams();
 */
  useEffect(() => {
      console.log('Lista');

      getItem().then((response) => {
          setItems(response);
      }, []);
  });
  return items.map((item) => (
    <main className='card-container'>
        <div className='cards' key={item.id}>
            <li className="title">
            <Link to={`/description/${item.id.description}`}>
      {item.productName}
      </Link>
     </li>
            <p>Precio:{item.precio}</p>
      </div>
    </main>
));
}

export default ItemListContainer;
    
  
  
 