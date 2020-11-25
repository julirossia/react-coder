 import React, {useEffect, useState} from 'react';
import '../App.scss';
import { useCartContext } from '../context/cartContex';
import { getFirestore } from '../firebase'

function Cart() {
        const { carts, setCart } = useCartContext();
        const [items, setItems] = useState([]);
        
async function CreateOrder() {
  debugger;
  const newOrder = {
    buyer: {name:'Alcides', phone: +543516651125, email:'alcides@gmail.com'},
    items: [
      {id:2, title:'Nike Downshifter 9', price:5500, quantity:2},
      {id:1, title:'Kappa Logo Navals', price:4500, quantity:1},

    ],
/*  date: firebase.firestore.FieldValue.Timestamp.fromDate(new Date()),
 */  total: 15500
  }
  const orders = db.collection('orders');
  const db = getFirestore();

  const itemQuery = await db.collection('items')
  .where(firebase.firestore.FieldPath.documentId(),
  'in', carts.map(c => c.items.id) /* ['ye7sY50HP7Iy9f2JFbIZ','tA36Ppn080AJxhDNmZgf'] */)
.get();
  /* const itemsId = await db.collection('items').get()

  items.where(firebase.firestore.FieldPath.documentId(),'in', ['ye7sY50HP7Iy9f2JFbIZ','tA36Ppn080AJxhDNmZgf'])
  */
  
  /*   items.doc.map(d=>({ ...d.data(),id: d.id})).map(({id, title,price,description,stock})=>({id, title,price,description,stock}))
   */
  /* orders.add(newOrder).then(id=>{
    console.log('orden creada con id:',id)
  }) */
  try{
    const doc = await orders.add(newOrder);
    console.log('Order created with Id:', doc.id)
  }catch(err){
    console.log('error al crear la orden')
  }
    
}

      
        const deleteProduct = (itemId) => {

          setCart(carts.filter((items, i) => i !== items));
        };
  
    return (
        <main className='card-container'>
        <div className='cards' >
            <h1>Carrito</h1>
            {carts.map((items, id) => (
                <tr key={id}>
                <p scope="col">Cantidad:{carts}</p>
                <p scope="col">Artículo:{carts.title}</p>
                <p scope="col">Precio:${items.price}</p>
                <p scope="col">Total:${items.clicks * items.price}</p>
                <p scope="col"></p>
                 
                    <button
                      className="less"
                      onClick={() => deleteProduct(carts)}
                    >
                      X
                    </button>
                    <button
                      className="less"
                      onClick={CreateOrder()}
                    >
                      Crear orden
                    </button>
            </tr>
              ))}
            </div>
        </main>
      );
}

export default Cart;


