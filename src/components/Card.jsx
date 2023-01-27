import React from "react";
import { RiShoppingCart2Line, RiStarHalfSFill, RiStarSFill, RiStarSLine } from "react-icons/ri";


const Card = () => {
    return(

		
		<div className="bg-white  flex flex-col justify-center items-center space-y-8 my-3 rounded-lg">
			<div className="rounded-sm h-44 w-36 items-center">
				<img src="images3.jpg" alt="" className="hover:scale-100 scale-75 w-32 h-28 transition-all duration-500 ease-in-out" />  
			</div>
			<div className="flex flex-col justify-start mb-2 space-y-3 relative">
				<div className="flex justify-start absolute -top-10 left-0">
					<RiStarSFill className="text-yellow-300 hover:scale-150"/>
					<RiStarSFill className="text-yellow-300 hover:scale-150"/>
					<RiStarSFill className="text-yellow-300 hover:scale-150"/>
					<RiStarHalfSFill className="text-yellow-300 hover:scale-150"/>
					<RiStarSLine className="text-yellow-300 hover:scale-150"/>
				</div>
				<h1 className="text-[#888888] text-left hover:text-yellow-400">Nombre Producto</h1>
				<a href="" className="text-[#555555] text-left hover:text-yellow-400">
					<strong >Descrición producto...</strong>
				</a>
				<div className="flex justify-between ml-1">
					<div className="space-x-2">
						<span className="text-md text-gray-400 italic line-through">$80.00</span>
						<span className="text-md font-bold text-[#1e3854]">$74.32</span>
					</div>
					<div className="flex items-center">
						<button className="transition duration-700 ease-in-out hover:scale-[250%] hover:text-[#56b533] text-violet-500 text-lg">
							<RiShoppingCart2Line className=""/>
						</button>
					</div>
			    </div>
			</div>
		</div>
	

			
       


           
           
    )
}

export default Card