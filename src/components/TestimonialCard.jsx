import React from "react";

const TestimonialCard = (props) => {
  return (
    <>


            <div className="w-10/12 m-auto  flex flex-col items-center gap-3 my-4 p-4 rounded-md shadow-md sm:w-1/4">
              <i className="fas fa-quote-left text-3xl text-orange-500"></i>
              <p className="text-center">
               {props.reviews}
              </p>
              <div className="rating text-orange-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="imageofperson rounded-full w-14 h-14 overflow-hidden">

              <img src={props.img} alt="Burger Image" className="h-full object-cover" />
              </div>
              <h3 className="font-semibold">{props.name}</h3>
            </div>

            

   
    </>
  );
};
export default TestimonialCard;
