import React from "react";
import reactLogo from '../assets/react.svg'


function NarBar() {
    return(
        <div className="flex flex-row w-full space-x-2 border-b-4 border-b-teal-700 shadow-b-teal-2xl bg-yellow-300 text-center ">
            <div className="items-center">
               <img src={reactLogo} alt="" />
                <div>
                <a href="">home</a>
                <a href="">dan</a>
                <a href="">Luisito</a>
                <a href="">Tata</a>
                <a href="">Lliet</a>
                </div>
            </div>  
        </div>
    )
}

export default NarBar