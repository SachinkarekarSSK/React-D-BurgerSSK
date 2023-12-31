import React from "react";

const SkeletonLodingCard = ()=>{
    return(
        <>


        <div className="m-auto w-56 p-2 bg-white shadow-xl rounded-lg animate-pulse">
            <div className="h-52 w-52 bg-gray-300 rounded-xl"></div>
            <div className="p-2 text-center ">
                <div className="h-4 bg-gray-300 w-1/2 mx-auto rounded-md my-1"></div>
                <div className="h-4 bg-gray-300 w-1/3 mx-auto rounded-md my-1"></div>
                <div className="h-4 bg-gray-300 w-2/3 mx-auto rounded-md my-1"></div>
            </div>
            <div className="flex justify-evenly items-center ">
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>
            <div className="text-center mt-2">
                <div className="h-10 bg-gray-300 w-1/2 mx-auto rounded-md"></div>
            </div>
        </div>
        </>
    )
}

export default SkeletonLodingCard