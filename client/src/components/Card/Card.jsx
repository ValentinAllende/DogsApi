import React from "react";
import estilo from '../Card/Card.module.css';
export default function Card({id,name,image,temperament}) {
return(
    <div className={estilo.card} key={id}> 
        <h3>{name}</h3> 
        <img src ={image}  alt='not found' width='200px' height='200px' />
        <h5>{temperament}</h5>
    </div>
)
}