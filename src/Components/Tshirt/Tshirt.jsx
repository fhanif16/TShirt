import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Tshirt.css"

const Tshirt = ({tshirt , handleAddTocart}) => {
    const {picture , name , price , _id} = tshirt;
  
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" srcset="" />
            <h3>{name}</h3>
            <p>price: $ {price}</p>
            <button onClick={() => handleAddTocart(tshirt)}> Buy now</button>
        </div>
    );
};

export default Tshirt;