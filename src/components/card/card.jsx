import React from "react";

export default function Card({
    Name,
    Image,
    Description,
    price
}){

    return(
        <>
        <div className="h-[300px] w-[300px] rounded-md flex flex-col p-2 m-2">
            <div>
                <img src={Image} alt={Name} className="h-[200px] w-full" />
            </div>
            <div className="flex  flex-col h-[200px] w-full">
                <h3 className="text-sm">{Name}</h3>
                {/* <p className="text-sm">{Description}</p> */}
                <h4 className="text-green-400 m-1">
                     <p className="text-green-600 text-left p-1">price {price*100}</p></h4>
            </div>
        </div>
        </>
    );
}