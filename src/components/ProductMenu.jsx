import React,{useState} from "react";
import ProductCard from './ProductCard'
import BurgerCards from "./BurgerCards";
// import {Drinks} from './CardData'
import DrinksCards from "./DrinksCards";







const ProductMenu = (props)=>{
 
   
    return(
        <>
            <div className="containerbox m-auto   flex flex-col flex-wrap bg-slate-100 ">
                <h1 className="text-center font-serif text-xl font-bold my-4">{props.title}</h1>

                <div className="container m-auto cardbox flex flex-wrap gap-14 justify-center items-center px-10 pb-20">


                    {
                        props.burgersorDrinks ? <BurgerCards /> : <DrinksCards />
                    }

                




                </div>
            </div>
        </>
    )
}

export default ProductMenu