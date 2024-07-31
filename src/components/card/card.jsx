import React from "react";

export default function Card({
    Name,
    Image,
    Description,
    price
}){

    return(
        <>
        <div className="h-[375px] w-[300px] bg-white rounded-md flex flex-col p-2 m-2">
            <div>
                <img src={Image} alt={Name} className="h-[250px] w-full" />
            </div>
            <div className="flex  flex-col h-[200px] w-full">
                <h3 className="text-sm">{Name}</h3>
                {/* <p className="text-sm">{Description}</p> */}
                {/* <h4 className="text-green-400 m-1">
                     <p className="text-green-600 text-left p-1">price {price*100}</p></h4> */}
            </div>
            <div className="flex w-full justify-between">
                <button className="bg-orange-500 p-2 w-1/4 rounded-md">BUY</button>
                <button className="bg-black  w-2/4 rounded-md text-white">Add To Cart</button>
            </div>
        </div>
        </>
    );
}