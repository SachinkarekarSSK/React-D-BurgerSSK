import React,{useState} from "react";


const ProductCard = (props)=>{

    const burgerName = props.burgerName || "Default Name";
    const burgerPrice = props.burgerPrice || "0";
    const burgerimage = props.burgerimage || 'error';

    const [count, setCount] = useState(1)

    return(
        <>
        {/* <div className="card w-56 flex flex-col justify-center items-center py-2   shadow-xl hover:shadow-md rounded-lg bg-white group">
                        <figure className="px-2 py-2 h-52 w-52 overflow-hidden ">
                            <img src={burgerimage} alt="Shoes" className="rounded-xl h-full w-full bg-slate-400 " />
                        </figure>
                        <div className="card-body items-center text-center p-2 w-full">
                            <h2 className="card-title">{burgerName}</h2>
                         

                            <div className="cardsmallbox flex justify-evenly items-center mb-2">
                            <div className="counter flex w-11 justify-evenly flex-col">
                                <p className="font-bold">&#8377;{burgerPrice}</p>

                                <div className="countpart flex justify-center">
                                        <button className="bg-slate-200 px-2 font-bold" onClick={()=>{
                                            if(count>1){
                                                setCount(count-1)
                                            }
                                        }}>-</button>
                                        <p className="mx-2">{count}</p>
                                        <button className="bg-slate-200 px-2 font-bold" onClick={()=>{
                                            setCount(count+1)
                                        }}>+</button>
                                </div>

                            </div>

                            </div>
                            <div className="card-actions">
                            <button className="btn btn-primary bg-red-600 text-white rounded-md p-2">Add to Cart</button>
                            </div>
                        </div>
                    </div> */}

<div className="w-64 mx-2 my-4 bg-white rounded-lg shadow-lg group overflow-hidden">
  <figure className="w-full h-48 overflow-hidden">
    <img src={burgerimage} alt="Burger" className="object-cover w-full h-full transition-transform transform group-hover:scale-105" />
  </figure>
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{burgerName}</h2>
    <div className="flex justify-between items-center mb-2">
      <div className="text-xl font-bold text-red-600">&#8377;{burgerPrice}</div>
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
    )
}


export default ProductCard