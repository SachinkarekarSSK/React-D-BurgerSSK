import React,{useState} from "react";


const ProductCard = (props)=>{

    const burgerName = props.burgerName || "Default Name";
    const burgerPrice = props.burgerPrice || "0";
    const burgerimage = props.burgerimage || 'error';

    const [count, setCount] = useState(1)

    return(
        <>
        <div className="card w-56 flex flex-col justify-center items-center py-2   shadow-xl hover:shadow-md rounded-lg bg-white group">
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
                    </div>
        </>
    )
}


export default ProductCard