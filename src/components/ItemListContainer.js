import React, { useState, useEffect, Fragment } from "react";
import ItemCount from './ItemCount';
 import '../App.scss';
import ItemDetail from "./ItemDetail";

function List(props) {
  const contentList = (
    <main className="card-container">
      {props.item.map((item) =>
        <Fragment key={item.id}/> 
        
          )}
    </main>
  );
 
  const contentCard = props.item.map((item) =>
  <div className="cards" key={item.id}>
      <li>{item.productName}</li>
      <p>Precio:{item.precio}</p>
<ItemDetail/>
<ItemCount/>
    </div>
    
  );
  const getItem = ()=>{
    return new Promise((res,rej)=>{
res ([
  {id: 1, productName:"Producto 1", precio:500},
  {id: 2, productName:"Producto 2",precio:600},
  {id: 3, productName:"Producto 3",precio:850},
  {id: 4, productName:"Producto 4",precio:550},
  {id: 5, productName:"Producto 5",precio:750},
  {id: 6, productName:"Producto 6",precio:590}
  
])
    },3000)
  }
  const [item, setItem]=useState();
    
  useEffect(()=>{
      console.log("Lista");

  
      getItem().then(res=>{
          setItem(item)
           console.log(res)

      },[])
  })
  
 
  return (
    <div>
      {contentList}
      {contentCard}
      
    </div>
  );
}
const item = [
  {id: 1, productName:"Producto 1", precio:500},
  {id: 2, productName:"Producto 2",precio:600},
  {id: 3, productName:"Producto 3",precio:850},
  {id: 4, productName:"Producto 4",precio:550},
  {id: 5, productName:"Producto 5",precio:750},
  {id: 6, productName:"Producto 6",precio:590}
  
];

function ItemListContainer() {
    
    return ( 
      <>
   <List item={item}/> 
  </>
   );
  }
 

export default ItemListContainer;