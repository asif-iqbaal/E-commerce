import React from "react";

export default function Loading(){

    return(
        <>
        <div className="flex h-screen justify-center items-center">
            <div>
                {/* loading rotatation */}
                <div className="loader rounded-full border-t-4 border-b-4 border-gray-900 h-12 w-12 mb-4 animate-spin">
                   
                </div>
                <div>Loading</div>
            </div>
        </div>
        </>
    );
}