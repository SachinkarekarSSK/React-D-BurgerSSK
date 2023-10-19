import React, { useEffect } from "react";
import ProductCard from "./ProductCard";




const Burgers = [
    {
        burgerName : 'Veg Burger',
        Price : '80',
        image : 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
        burgerName : 'Chicken Burger',
        Price : '90',
        image : 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
        burgerName : 'Cafrel Burger',
        Price : '100',
        image : 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
        burgerName : 'Double Tracker Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Fish Cutlet Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Aloo Tickii Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Non Veg Burger',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1614597547184-69891309204a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
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