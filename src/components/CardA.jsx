import React from "react";
import { RiShoppingCart2Line, RiStarHalfSFill, RiStarSFill, RiStarSLine } from "react-icons/ri";


const CardA = (props) => {
    
	const p = console.log(props.productos);
	const d = console.log(props.descrip);
	const va = console.log(props.valora);
	const vb = console.log(props.valorb);
	
	return(
        <div className="bg-white  flex flex-col justify-center items-center space-y-8 my-3">
			<div className="rounded-sm h-44 w-36 items-center border">
				<img src={require(`${props.img}.jpg`)} alt="" className="hover:scale-100 scale-75 w-32 h-28 transition-all duration-500 ease-in-out" />  
			</div>
			<div className="flex flex-col justify-start mb-2 space-y-3 relative">
				
				<h1 className="text-[#888888] text-left hover:text-yellow-400">{props.productos}</h1>
				<a href="" className="text-[#555555] text-left hover:text-yellow-400">
					<strong >{props.descrip}</strong>
				</a>
				<div className="flex justify-between ml-1">
					<div className="space-x-2">
						<span className="text-md text-gray-400 italic line-through">{props.valora}</span>
						<span className="text-md font-bold text-[#1e3854]">{props.valorb}</span>
					</div>
					
			    </div>
				<div className="flex justify-center border border-green-400 bg-green-400">
					<button className=" m-1 transition duration-700 ease-in-out hover:scale-[250%] hover:text-[#56b533] text-violet-500 text-lg">
								<RiShoppingCart2Line />
					</button>
				</div>
			</div>
		</div>
	

			
       


           
           
    )
}

export default CardA