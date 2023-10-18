import React, { useState } from "react";

const ProductCard = (props) => {
  const burgerName = props.burgerName || "Default Name";
  const burgerPrice = props.burgerPrice || "0";
  const burgerimage = props.burgerimage || "error";

  const [count, setCount] = useState(1);

  return (
    <>
      <div className="w-64 mx-2 my-4 bg-white rounded-lg shadow-lg group overflow-hidden">
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={burgerimage}
            alt="Burger"
            className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {burgerName}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-bold text-red-600">
              &#8377;{burgerPrice}
            </div>
            <div className="flex items-center">
              <button
                className="rounded-full bg-red-600 text-white px-3 py-1 hover:bg-red-700 focus:outline-none"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p className="mx-3 font-semibold text-gray-800">{count}</p>
              <button
                className="rounded-full bg-red-600 text-white px-3 py-1 hover:bg-red-700 focus:outline-none"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
