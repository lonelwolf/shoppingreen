import { Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { RiBuilding2Line, RiHome5Line, RiLogoutCircleRLine, RiLuggageCartLine, RiMailLine, RiPieChartLine, RiUser6Line }from "react-icons/ri";
import ModalUser from "./ModalUser";




function Sidebar(props){

    const { showMenu} = props;
    
    const [showOrder, setShowOrder] = useState(false);

    const [show, setShow] = useState(false);
    
    const toggleShow = () =>{
        setShow(!show);
      }

      const toggleOrder = () =>{
        setShowOrder(!showOrder);
        
      }
    
    
    return(
        <div className={`bg-stone-700 fixed lg:left-0 top-0 w-20 h-full flex flex-col justify-between py-6 z-50  transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div className="">
                <div className="bg-stone-700 mb-5 flex justify-center rounded-tl-xl rounded-bl-xl text-red-500">
                    <RiBuilding2Line className="hover:text-4xl transition-all hover:box"/>
                </div>
                <ul className="pl-4 space-y-3">
                    <li className="bg-white p-4 mb-14 flex justify-center rounded-tl-xl rounded-bl-xl text-white border border-t-[#56b533] border-r-white border-l-[#56b533] border-b-[#56b533]">
                        <a href="" className="bg-[#56b533] p-2 block rounded-xl ">
                        <RiHome5Line className="text-2xl"/>
                        </a>
                    </li> 
                    <Tooltip content="Iniciar Usuario"
                                 trigger="hover"
                                 placement="right"
                                 className="px-4"
                        >
                        <li className="hover:bg-white p-4 flex justify-center rounded-tl-xl rounded-bl-xl group transition-colors">
                        
                                <a className="group-hover:bg-white p-2 block rounded-xl text-white group-hover:text-blue-700 transition-colors">
                                    <RiUser6Line className="text-2xl" onClick={toggleShow}/>
                                </a>
                        
                            
                        </li> 
                    </Tooltip>
                    <li className="hover:bg-white p-4 flex justify-center rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-white p-2 block rounded-xl text-white group-hover:text-[#56b533] transition-colors">
                        <span class="flex relative h-3 w-3 top-2 -right-[65%] -mt-1 -mr-1">
                           <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                           <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <RiLuggageCartLine className="text-2xl"/>
                        </a>
                    </li>
                    <li className="hover:bg-white p-4 flex justify-center rounded-tl-xl rounded-bl-xl group transition-colors">
                        <button  onClick={toggleOrder} className="group-hover:bg-white p-2 block rounded-xl text-white group-hover:text-yellow-400 transition-colors">
                        <RiPieChartLine className="text-2xl"/>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className="hover:bg-white p-4 flex justify-center rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-white p-2 block rounded-xl text-white group-hover:text-[#cc363e] transition-colors ">
                        <RiLogoutCircleRLine className="text-2xl"/>
                        </a>
                    </li>
                </ul>
            </div>
           <ModalUser show={show}/>
        </div>
       
    )

}

export default Sidebar