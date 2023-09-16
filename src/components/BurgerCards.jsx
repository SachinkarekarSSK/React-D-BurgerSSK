import React from "react";
import ProductCard from "./ProductCard";
import bg1 from '../assets/burger1.jpg'
import bg2 from '../assets/burger2.jpg'
import bg3 from '../assets/burger3.jpg'
import bg4 from '../assets/burger4.jpg'
import bg5 from '../assets/burger5.jpg'
import bg6 from '../assets/burgerr5.jpg'
import bg7 from '../assets/burger6.jpg'
import bg8 from '../assets/burger7.jpg'
import bg9 from '../assets/burger8.jpg'



const Burgers = [
    {
        burgerName : 'Veg Burger',
        Price : '80',
        image : `${bg1}`,
    },
    {
        burgerName : 'Chicken Burger',
        Price : '90',
        image : `${bg2}`,
    },
    {
        burgerName : 'Cafrel Burger',
        Price : '100',
        image : `${bg3}`,
    },
    {
        burgerName : 'Double Tracker Burger',
        Price : '30',
        image : `${bg4}`,
    },
    {
        burgerName : 'Fish Cutlet Burger',
        Price : '30',
        image : `${bg5}`,
    },
    {
        burgerName : 'Aloo Tickii Burger',
        Price : '30',
        image : `${bg6}`,
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : `${bg7}`,
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : `${bg8}`,
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : `${bg9}`,
    },

]



const BurgerCards = ()=>{
    return(
        <>
            { 
                Burgers.map((item,index)=>{
                    return( <ProductCard key={index} burgerName={item.burgerName} burgerPrice={item.Price} burgerimage={item.image}/>)
                })
            }
        </>
    )
}



export default BurgerCards