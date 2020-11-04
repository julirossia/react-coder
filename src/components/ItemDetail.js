 import React, { useState, useEffect, Fragment } from "react";
import '../App.scss';

function ListDetail(props){
    
      const contentDetail = props.description.map((description) =>
      <div >
          <p><b>Descripción:</b>{description.descrip}</p>
       </div>
        
      );
      const getDescription = ()=>{
        return new Promise((res,rej)=>{
    res ([
      {id: 1, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
      {id: 2, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
      {id: 3, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
      {id: 4, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
      {id: 5, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
      {id: 6, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."}
      
    ].map)
        },3000)
      }
      const [description, setDescription]=useState();

      useEffect(()=>{
        console.log("Detalle de Producto");
  
    
        getDescription().then(res=>{
            setDescription(description)
             console.log(res)
  
        },[])
    })
    return (
        <>
          {contentDetail}

                  </>
      );
}
const description = [
    {id: 1, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {id: 2, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {id: 3, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {id: 4, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {id: 5, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {id: 6, descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."}
]


function ItemDetail() {
    
   return ( 
        <div>
            <ListDetail description={description}/>

        </div> 
    
   );
  }
 

export default ItemDetail;   