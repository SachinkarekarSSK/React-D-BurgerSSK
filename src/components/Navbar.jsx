import React, { useState } from "react";
import logoImage from "../assets/hamburger.png";

const Navbar = () => {
  const [navShowORHide, setnavShowORHide] = useState(false)
  return (
    <>
      {/* this is for the small screen, mobiles */}
      <div className="mynavbar sticky start-4 top-0 left-0 right-0 sm:hidden p-2 px-4 flex align-middle justify-between  z-10 bg-white  bg-opacity-60 backdrop-blur">
        <img src={logoImage} className="h-9" alt="logo" />
        <div className="menu flex justify-center items-center">
          <i className={`fa-solid ${navShowORHide ? 'fa-xmark' : 'fa-bars'} text-xl`} onClick={()=>{
              navShowORHide ? setnavShowORHide(false) : setnavShowORHide(true)
          }}></i>
        </div>

        </div>
        <div className={`movingNav block sm:hidden fixed ${navShowORHide ? 'left-0' : '-left-full'} top-[52px]  w-full h-96 m-auto  transition-all duration-500 shadow-md  z-10 bg-white  bg-opacity-60 backdrop-blur`}>
            <ul className="flex flex-col justify-center items-center font-semibold gap-4 m-auto h-full">
              <button className="px-5 btn btn-outline btn-secondary btn-md p-1 rounded-sm ">Home</button>
              <button className="px-5 btn btn-outline btn-secondary btn-md p-1 rounded-sm">About</button>
              <button className="px-5 btn btn-outline btn-secondary btn-md p-1 rounded-sm">Menu</button>
              <button className="px-5 btn btn-outline btn-secondary btn-md p-1 rounded-sm">Contact</button>
            </ul>

      </div>




      {/* this is for the bigger screen */}
      <div className="mynavBIG hidden sm:block  bg-opacity-80 backdrop-blur bg-black text-white">
        <div className="MainBox flex align-middle justify-between py-4 px-3">
          <div className="imgbox flex items-center">
            <img src={logoImage} className="h-11" alt="" />
            <h1 className="font-bold">D-Burgers</h1>
          </div>

          <div className="box flex ">
            <ul className="flex justify-center items-center font-semibold">
              <li className="px-5 hover:text-red-600">Home</li>
              <li className="px-5 hover:text-red-600">About</li>
              <li className="px-5 hover:text-red-600">Menu</li>
              <li className="px-5 hover:text-red-600">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
