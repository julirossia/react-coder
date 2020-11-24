import React, { useState, useEffect } from "react";
import '../App.scss';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase'


function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {

    console.log('Lista');
    const db = getFirestore()
    const itemCollection = db.collection('items');
    const pricedItems = itemCollection.where ("price", ">", 3000);

    pricedItems.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('no results');
      }
      setItems(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
          console.log(doc.data());
        })
      );    })

  }, []);

  return items.map((items) => (
    <main className='card-container'>
      <div className='cards' key={items.id}>
        <li className="title">
          <Link to={`/description/${items.id}`}>
            {items.title}
          </Link>
        </li>
        <p>Descripcion:{items.description}</p>
        <p>Precio:{items.price}</p>
      </div>
      
    </main>
  ));
}

export default ItemListContainer;



