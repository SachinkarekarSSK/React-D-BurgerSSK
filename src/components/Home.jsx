import React from "react";
import BurgerImage from "../assets/burger.png";
import bg1 from "../assets/burgerBG.png";
import bg2 from "../assets/burgerBG2.png";
import bg3 from "../assets/burgerBG3.png";
import bg4 from "../assets/burgerBG4.png";
import bg5 from "../assets/burgerBG5.png";
import bg6 from "../assets/burger BG9.png";
import bg7 from "../assets/burgerBG7.png";
import bg8 from "../assets/burgerBG8.png";
import bg10 from "../assets/burgerBG10.png";
import ordercartimg from "../assets/orderimg.png";


const Home = () => {
  return (
    <>
      <div className="box  overflow-y-hidden ">
            <div className="container lg:w-11/12 flex justify-center m-auto flex-wrap-reverse sm:flex h-auto lg:h-[95vh]    overflow-x-hidden overflow-y-hidden mb-12 lg:mb-0">
                <div className="LeftSection container text-center lg:text-left flex flex-col lg:w-2/4 pt-20 md:m-0 justify-center gap-2 ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Hello <span className="text-red-500">Burgers</span>
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Welcome to <span className="text-red-500"><br></br>D-Burger's Land</span>
                    </h1>
                    <p className="intropara px-2">
                    Pouring Love In Every Bite You Take To Make Your Burger Extra
                    Better Then Your Last One
                    </p>
                    <button className="btn flex align-middle justify-center items-center   w-1/2 sm:w-1/3 m-auto lg:m-0 p-2 rounded-full bg-red-950 text-white hover:bg-red-700  transition-all duration-300 ">Order Now <i className="fa-solid fa-cart-arrow-down pl-1 "></i></button>
                </div>

            <div className="rightcontainer h-3/6 lg:w-2/5 md:w-1/2  mt-20 lg:my-auto relative flex align-middle items-center ">
                <div className="RightSection relative h-60 sm:h-80 flex items-center justify-center m-auto">
                <img src={BurgerImage} className="w-full h-full" alt="" />

                <div className="bgburgers w-full h-full group grayscale absolute rotate-0 hover:rotate-90 transition-all ease-in-out duration-[5000ms] opacity-[0.5] hover:opacity-95 hover:grayscale-0">
                    <img
                    src={bg1}
                    alt=""
                    className="movingimg img1 w-10 sm:w-12 md:w-14 absolute -top-4 -left-6 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-top-4 group-hover:left-0"
                    />
                    <img
                    src={bg2}
                    alt=""
                    className="movingimg img2 w-10 sm:w-12 md:w-14 absolute -right-14 bottom-16 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-right-8"
                    />

                    <img
                    src={bg3}
                    alt=""
                    className="  movingimg img3 w-10 sm:w-12 md:w-14 absolute right-32 sm:right-44 -top-10 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-top-12 group-hover:right-24 sm:group-hover:right-32"
                    />
                    <img
                    src={bg4}
                    alt=""
                    className="movingimg img4 w-10 sm:w-12 md:w-14 absolute top-52 -left-10 sm:top-60 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:top-56 group-hover:left-0 sm:group-hover:top-64 sm:group-hover:-left-4"
                    />
                    <img
                    src={bg5}
                    alt=""
                    className="movingimg img5 w-10 sm:w-12 md:w-14 absolute left-52 -bottom-8 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-bottom-8 sm:group-hover:-bottom-16 group-hover:left-48"
                    />

                    <img
                    src={bg6}
                    alt=""
                    className="movingimg img6 w-10 sm:w-12 md:w-14 absolute -right-12 top-12 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-right-8"
                    />
                    <img
                    src={bg7}
                    alt=""
                    className="movingimg img7 w-10 sm:w-12 md:w-14 absolute right-32 top-60 sm:right-44  sm:top-72 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:right-28 group-hover:top-60 sm:group-hover:right-52 sm:group-hover:top-80"
                    />
                    <img
                    src={bg8}
                    alt=""
                    className="movingimg img8 w-10 sm:w-12 md:w-14 absolute -left-12 top-20 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:-left-10 group-hover:top-28 sm:group-hover:top-32"
                    />
                    <img
                    src={bg10}
                    alt=""
                    className="movingimg img9 w-10 sm:w-12 md:w-14 absolute -top-8 left-52 sm:-top-12 transition-all duration-[5000ms] group-hover:-rotate-90 group-hover:left-52 group-hover:-top-10  sm:group-hover:left-64"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default Home;
