 import React, { useState, useEffect } from "react";
import '../App.scss';




function ItemDetail() {
    
    const getDetail = ()=>{
        return new Promise((res,rej)=>{
            res([{descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
        {descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."},
    {descrip:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus porta venenatis nisi."}])
        },3000)
    }
    const [description, setDescription]=useState();
    
    useEffect(()=>{
        console.log("detalle");

    
        getDetail().then(res=>{
            setDescription(description)
             console.log(res)

        },[])
    })
    return ( 
        <div>
            <p>
            descripción:{description}
            </p>

        </div> 
    
   );
  }
 

export default ItemDetail;   