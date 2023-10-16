import React from "react";
import ProductCard from "./ProductCard";




import drink1 from '../assets/drink1.jpg'
import drink2 from '../assets/drink2.jpg'
import drink3 from '../assets/drink3.jpg'
import drink4 from '../assets/drink4.jpg'
import drink5 from '../assets/drink5.jpg'
import drink6 from '../assets/drink6.jpg'
import drink7 from '../assets/drink7.jpg'
import drink8 from '../assets/drink8.jpg'
import drink9 from '../assets/drink9.jpg'





const Drinks = [
    {
        burgerName : 'Mohito',
        Price : '80',
        image : `${drink1}`,
    },
    {
        burgerName : 'Mountain due',
        Price : '90',
        image : `${drink2}`,
    },
    {
        burgerName : 'sprite',
        Price : '100',
        image : `${drink3}`,
    },
    {
        burgerName : 'Budvieser',
        Price : '30',
        image : `${drink4}`,
    },
    {
        burgerName : 'kingfisher',
        Price : '30',
        image : `${drink5}`,
    },
    {
        burgerName : 'jhonny walker',
        Price : '30',
        image : `${drink6}`,
    },
    {
        burgerName : 'black dog',
        Price : '30',
        image : `${drink7}`,
    },
    {
        burgerName : 'black & white',
        Price : '30',
        image : `${drink8}`,
    },
    {
        burgerName : 'Blue lagoon',
        Price : '30',
        image : `${drink9}`,
    },

]


const DrinksCards =  ()=>{

    return(
        <>
            { 
                Drinks.map((item,index)=>{
                    return( <ProductCard key={index} burgerName={item.burgerName} burgerPrice={item.Price} burgerimage={item.image}/>)
                })
            }
        </>
    )
}



export default DrinksCards