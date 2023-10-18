import react from 'react'
import chefimage from '../assets/chefimage.jpg'
import customizebg from '../assets/customizebg.jpg'


const CustomizeSection = ()=>{
    return(
        <>
        <div className="container py-10  m-auto bg-yellow-300 shadow-inner   rounded-t-xl">
            
            
            <div className="glasscontainer bg-white shadow-md  bg-opacity-60 backdrop-blur gap-4 py-7 px-4 rounded-lg flex flex-col justify-evenly items-center m-auto w-10/12 md:flex-row">

                <div className="left ">
                    <div className="burgerimg  md:w-96 ">
                        <img className='h-full rounded-lg mix-blend-multiply' src={chefimage}alt="" />
                    </div>
                </div>
                <div className="right flex flex-col gap-2 text-yellow-800">
                    <h1 className='text-lg'>Hey Foodies Now You Can Customize Your Burger</h1>
                    <h1 className='font-extrabold text-4xl text-yellow-400'>Customize Now</h1>
                    <h1 className='font-semibold text-base'>Let's Customize your D-Burger</h1>
                    <button className='btn font-bold text-lg  bg-yellow-300 hover:bg-yellow-400 group text-yellow-900 w-3/4'>Customize <i class="group-hover:ml-2 transition-all fa-solid fa-circle-chevron-right"></i></button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default CustomizeSection