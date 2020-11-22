import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';
import ItemCount from './ItemCount';

const getDescription = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                productName:"",
                descrip:
                    'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi.',
            });
        }, 1500);
    });
};
function ItemDetail() {
    const [description, setDescription] = useState({});
    const { id, productName} = useParams();
    console.log(id);

    useEffect(() => {
        console.log('Detalle de Producto');

        getDescription().then((res) => {
            setDescription(res);
            console.log(res);
        });
    }, []); // Ojo con esto. Recordá agregar el array vacío al final, si no entra en loop infinito.
    return (
        <main className='card-container'>
            <div className='cards'>
                <p>
                    <b>Descripción:</b>
                    {description.descrip}
                </p>
                <ItemCount />
            </div>
        </main>
    );
}

export default ItemDetail;
