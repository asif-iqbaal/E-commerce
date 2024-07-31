import React from "react";
import { useLocation } from "react-router-dom";
export default function CardPage(){
    const location = useLocation();
    const {state} = location;
    console.log(state);
    const { title, image, description, price, rating } = location.state;
    return(
        <>
        <div className="flex w-screen h-[80vh]">
            <div className="w-1/3 h-[80%] flex justify-center items-center border-r-black">
                <img src={image} alt={title} className="rounded-md  h-1/2 w-1/2 p-2"/>
            </div>
            <div className="w-1/2 h-full">
            <h3 className="text-4xl m-2 p-2">{title}</h3>

                <p className="text-md font-serif m-2 p-2"><p className="text-2xl" 
                >Product Details</p>{description}</p>
                <h4 className="text-green-400 text-lg m-2 p-2">MRP : {price*100}</h4>
                <button className="bg-yellow-400 h-12 w-32 rounded-lg  m-2 p-2">purcahse</button>
                {/* <p className="text-blue">rating is {rating}</p> */}
            </div>
        </div>
        </>
    );
}