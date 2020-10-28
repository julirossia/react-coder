import React from 'react';
import ItemCount from './ItemCount';
import '../App.scss';

function List({ productName, description }) {
  return (
      <main className="card-container">
    <div className="cards">
      <ul>
        <li className="items">{productName}</li>
      </ul>
      <p>{description}</p>
      <ItemCount/>
    </div>
    </main>
  );
}

function ItemListContainer() {
  return (
    < >
        <List 
          productName="Producto 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
        <List
          productName="Producto 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
        <List
          productName="Producto 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
         <List
          productName="Producto 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
         <List
          productName="Producto 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
         <List
          productName="Producto 6"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta venenatis nisi."
        ></List>
        
    </>
  );
}

export default ItemListContainer;
