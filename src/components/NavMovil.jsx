import React from "react";
import { RiLuggageCartLine, RiUser6Fill, RiCloseLine, RiMenu4Line } from "react-icons/ri";


const NavMovil = (props) => {
   const {showMenu} = props;
    return(
        <nav className="bg-[#3c8621] lg:hidden flex flex-row items-center justify-between  w-full text-white  p-2 ">
            
            <button className="p-1 text-3xl">
            <RiLuggageCartLine />
            </button>
            <button className="p-1 text-3xl">
            <RiUser6Fill/>
            </button>
            <button onClick={showMenu} className="bg-teal-700 rounded-full p-1 text-3xl">
            {showMenu ? <RiCloseLine /> : <RiMenu4Line/>}
            </button>
      </nav>
    )
}

export default NavMovil