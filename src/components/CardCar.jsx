import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";


const CardCar = () => {
 
    return(
        <div className="bg-[#56b533] rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:border hover:border-[#56b533] mb-4 ">
            <div className="flex mx-2">
            {/*Cart Descripcion del Productos*/}  
            <div className="col-span-4 flex items-center gap-3 ">
                <img src="tenis.jpg" alt="" className="w-10 h-10 rounded-full"/>
                <div className="mt-3">
                <h5 className="text-sm text-slate-300 ">Descripción del producto</h5>
                <span className="text- text-gray-500">$4.10</span>
                </div>
            </div>
            <div className="bg-white shadow-2xl rounded-full m-3 flex items-center justify-center">
                <span className="text-red-400">Qts</span>
            </div>
            <div className="m-3 flex items-center justify-center">
                <span className="text-white">Import</span>
            </div>
            </div>
            <div className="flex items-center justify-between mr-5">
            <div className="">
                <input type="text" placeholder="Observaciones" className="bg-stone-700 rounded-xl p-1 px-4 ml-6 my-3 outline-none text-white"/>
            </div>
            <div className="">
                <button className="text-2xl text-red-400 border border-red-400 p-1"><RiDeleteBinLine/></button>
            </div>
            </div>
        </div>

    )
}

export default CardCar