import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Contact/Cart/Cart';
import './Home.css'
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart , setcart] = useState([]);

    const handleAddTocart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added tshirt')


        }
        else {
            const newcart = [...cart , tshirt];
       setcart(newcart);

        }
       

    }


    const handleRemoveFromCart =(id) => {
        const remaining = cart.filter(ts => ts._id !==id);
        setcart(remaining);


    }
    console.log(tshirts)
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
            tshirts.map(tshirt => <Tshirt
            key={tshirt._id}
            tshirt ={tshirt} 
            handleAddTocart ={handleAddTocart}></Tshirt>)
           }
            </div>


            <div className='cart-container'>
            <Cart 
            cart={cart} 
            handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
          


            
        </div>
       
    );
};

export default Home;