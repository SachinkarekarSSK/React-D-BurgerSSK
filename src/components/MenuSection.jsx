import React, { createContext } from "react";
import cardbgimg from '../assets/burgerBG5.png'
import smoothie from '../assets/smoothie.png'


const Menu = ({burgers , drinks}) => {
  
  


  return (
    <>
      <div className="container w-10/12 m-auto  h-80 justify-center  flex flex-col">
        <div className="heading mb-3">
          <div className="smallbox w-fit m-auto relative">
          <h1 className="text-center font-semibold text-lg">Menu</h1>
          <div className="bar bg-purple-950"></div>
          </div>
        </div>

                <div className="cardscontainer flex w-full sm:w-3/4 m-auto justify-center gap-10 align-middle items-center mb-20">


                    <div className="card bg-pink-100 w-40 sm:w-96 bg-base-100 shadow-xl rounded-lg pb-7 hover:shadow-md transition-all">
                        <figure className="px-5 pt-5 sm:px-10 sm:pt-10">
                        <img
                            src={cardbgimg}
                            alt="Shoes"
                            className="rounded-xl h-16 sm:h-28 m-auto"
                        />
                        </figure>
                        <div className="card-body items-center text-center mt-3">
                        <h2 className="card-title">Burgers!</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions mt-2">
                            <button className="btn btn-primary bg-red-600 text-white rounded-md p-1 text-sm sm:text-base sm:p-2" onClick={()=>{
                             burgers()
                            }}>Explore Burgers</button>
                        </div>
                        </div>
                    </div>


                    <div className="card bg-pink-100  w-40 sm:w-96 bg-base-100 shadow-xl rounded-lg pb-7 hover:shadow-md transition-all">
                        <figure className="px-5 pt-5 sm:px-10 sm:pt-10">
                        <img
                            src={smoothie}
                            alt="Shoes"
                            className="rounded-xl h-16 sm:h-28 m-auto"
                        />
                        </figure>
                        <div className="card-body items-center text-center mt-3">
                        <h2 className="card-title">Drinks!</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions mt-2">
                        <button className="btn btn-primary bg-red-600 text-white rounded-md p-1 text-sm sm:text-base sm:p-2" onClick={()=>{
                              drinks()
                            }}>Explore Drinks</button>
                        </div>
                        </div>
                    </div>
                </div>
      </div>
    </>
  );
};

export default Menu;

