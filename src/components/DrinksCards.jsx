import React from "react";
import ProductCard from "./ProductCard";






const Drinks = [
    {
        burgerName : 'Mohito',
        Price : '80',
        image : 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpbmtzfGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
        burgerName : 'Mountain due',
        Price : '90',
        image : 'https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'sprite',
        Price : '100',
        image : 'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'Budvieser',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1589132971214-ed8169976abd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'kingfisher',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1542847890-8c4210389b23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'jhonny walker',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D',
    },
    {
        burgerName : 'black dog',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxkcmlua3N8ZW58MHwwfDB8fHww',
    },
    {
        burgerName : 'black & white',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1641919089328-5d5063828c4f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxkcmlua3N8ZW58MHwwfDB8fHww',
    },
    {
        burgerName : 'Blue lagoon',
        Price : '30',
        image : 'https://images.unsplash.com/photo-1591254483456-4f7a693fda23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNva2V8ZW58MHwwfDB8fHww ',
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