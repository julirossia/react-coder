import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';
import ItemCount from './ItemCount';
import { getFirestore } from '../firebase'


function ItemDetail() {
    const [description, setDescription] = useState([]);
    const [items, setItems] = useState([]);

/*     const { id } = useParams();
 */
    useEffect(() => {
        const db = getFirestore();
        const itemDetail = db.collection("items");
        
        itemDetail.get().then((docSnapshot)=>{
            if(docSnapshot.size===0){
                console.log('no results')
            }
            setItems(docSnapshot.docs.map(doc=>doc.data()))
        })
    }, []); 
    return items.map((items) =>(
        <main className='card-container'>
            <div className='cards'>
                <p><b>                {items.title}
</b></p>
                <p>

                    <b>Descripción:</b>
                    {items.description}
                </p>
                <ItemCount />
            </div>
        </main>
 ));
}

export default ItemDetail;
