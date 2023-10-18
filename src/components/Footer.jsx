import React from "react";

const Footer = ()=>{
    return(
        <>
<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
      <h3 className="text-2xl font-bold">D-Burger's</h3>
      <p className="mt-2">Serving the best burgers in town.</p>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 text-center mt-4 md:mt-0">
      <h4 className="text-lg font-semibold">Contact Us</h4>
      <p className="mt-2">Ponda , Goa</p>
      <p>Email: info@D-burgers.com</p>
      <p>Phone: (+91) 74472068</p>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 text-center mt-4 md:mt-0">
      <h4 className="text-lg font-semibold">Follow Us</h4>
      <div className="flex justify-center  mt-2">
        <a href="#" className="text-white hover:text-gray-400 mx-2">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400 mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400 mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>



        </>
    )
}

export default Footer