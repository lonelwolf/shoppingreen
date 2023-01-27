import { Button, Checkbox, Dropdown, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine, RiGlobalFill, RiKeyLine, RiListCheck, RiMailLine, RiMapPinUserLine, RiMoneyDollarBoxLine, RiNotification2Line, RiRoadMapLine, RiSearch2Line, RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";
import { green } from "tailwindcss/colors";
import MenuCateg from "./MenuCateg";
import ModalLocation from "./ModalLocation";
import ModalUser from "./ModalUser";
import NavMovil from "./NavMovil";



const Header = () => {

  const [showL, setShowL] = useState(false);
  const [categ, setCateg] = useState(false);
  
  const toggleShowCateg = () =>{
    setCateg(!categ);
  }

  const toggleShowL = () =>{
    setShowL(!showL);
  }

  const [show, setShow] = useState(false);
    
    const toggleShow = () =>{
        setShow(!show);
      }
     
    return(
      
        <div className="mb-10 shadow-md shadow-[#7ac55f] z-20">
           <ModalUser show={show}/>
           {/*barra de busqueda de productos e informacion de usuario*/} 
          <header className="flex flex-row p-1 px-3 justify-between items-center border-b-4 border-t-4 border-[#56b533] bg-gray-100 w-full xl:px-10 ">
              <div className="flex  flex-row  items-center space-x-3 ">
                  <div className="flex xl:hidden text-gray-200 border border-orange-400 bg-orange-400 p-2 hover:bg-gray-50 hover:text-orange-400">
                    <RiListCheck className="text-4xl"/>
                  </div>
                  <div className="flex items-center sm:space-x-5">
                    <img src="logo.png" alt="" className="md:flex hidden " />
                    <img src="icon_logo.jpg" alt="" className="flex md:hidden" />
                  </div>
              </div>
              
              <div onClick={toggleShowL} className="cursor-pointer hidden xl:flex xl:mx-7 xl:flex-row">
                <div className="flex justify-between items-center bg-[#56b533] border-[#56b533] border  text-gray-100 mb-1 lg:justify-center lg:px-5 lg:space-x-5 lg:rounded-l-md lg:mb-0 hover:text-[#56b533] hover:bg-gray-50 hover:border">
                  <span className="font-semibold">Localidad</span>
                  <RiRoadMapLine className="text-xl "/>
                </div>
                <div className="flex">
                  <input type="search"  className="my-0.5 border-[#56b533] outline-none place-content-center placeholder:text-gray-300 placeholder:font-thin text-gray-600 font-semibold " placeholder="Buscar productos"/>
                  <button  className="bg-[#56b533] border border-[#56b533] px-3 text-gray-100 lg:px-5 rounded-r-md hover:bg-gray-50 hover:text-[#56b533] hover:border-l text-xl">
                    <RiSearch2Line/>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end items-center lg:space-x-3 md:space-x-0 md:ml-5">
                <div className="xl:hidden flex justify-end items-center space-x-5">
                  <RiGlobalFill className="text-3xl text-gray-200 hover:text-indigo-700 border border-indigo-700 bg-indigo-700 hover:bg-gray-50"/>
                  <RiMoneyDollarBoxLine className="text-3xl text-gray-200 hover:text-teal-900 border border-teal-900 bg-teal-900 hover:bg-gray-50"/>
                  <RiShoppingBasket2Line type="button" className="text-3xl text-gray-200 hover:text-orange-400 border border-orange-400 bg-orange-400 hover:bg-gray-50" />
                  <span class="relative items-center inline-flex right-6 top-3 rounded-full h-4 w-4 bg-sky-500"></span>
                </div>
                <a className="text-3xl lg:leading-6 text-blue-800 ">
                   <RiNotification2Line 
                    className="animate-pulse"/>
                </a>
                <a className="text-3xl border-l border-gray-300 ml-3 pl-3 lg:ml-6 lg:pl-6 hover:text-[#56b533]">
                <RiUser6Line 
                    onClick={toggleShow}
                    className="hover:animate-bounce"/>  
                </a>  
              </div>
         
          </header>

          {/*barra de navegacion superior informacion del carrito*/}
          <div className="flex flex-row justify-between md:space-x-14 w-full bg-[#3c8621] px-10 py-2 z-[999]">
            <div onClick={toggleShowCateg} className="flex items-center xl:space-x-3 xl:mx-16 cursor-pointer"> 
                <RiListCheck className="text-2xl text-orange-400"/>
                <span className="text-gray-200 text-lg font-semibold">Categorias</span>
                <RiArrowDropDownLine className="text-2xl text-gray-200 hover:animate-bounce"/>
            </div>

            <div className="hidden xl:flex flex-row lg:justify-between items-center md:space-x-12 lg:px-16 lg:space-x-14 border-l border-r  border-gray-400 text-gray-200 font-semibold">
                <a href="">
                    Productos
                </a>
                
                <Dropdown label="Mayoristas" size="xl" color={green} className=" mt-2 text-gray-300 text-start">
                    
                    <Dropdown.Item  className="px-20 text-xl text-start">
                      Tiendas 
                    </Dropdown.Item>
                    <Dropdown.Item  className="px-20 text-xl text-start">
                      Asociarce
                    </Dropdown.Item>
                    
                  </Dropdown>
                  
                  <Dropdown label="De Interes" size="xl" color={green} className=" mt-2 text-gray-300 text-start">
                    
                    <Dropdown.Item  className="px-20 text-xl text-start">
                      Quienes Somos? 
                    </Dropdown.Item>
                    <Dropdown.Item  className="px-20 text-xl text-start">
                      Que debes saber?
                    </Dropdown.Item>
                    <Dropdown.Item  className="px-20 text-xl text-start">
                      Nuestro contacto
                    </Dropdown.Item>
                    
                  </Dropdown>
            </div>
            <div className="flex justify-center xl:hidden 2xl:hidden items-center text-gray-200">
              <div className="flex flex-row relative">
                  <div onClick={toggleShow} className="flex items-center bg-[#56b533] border-[#56b533] border  text-gray-100 justify-center px-5 space-x-5 rounded-l-md mb-0 hover:text-[#56b533] hover:bg-gray-50 hover:border-2">
                    <span className="font-semibold">Localidad</span>
                    <RiRoadMapLine className="text-xl "/>
                  </div>
                  <div className="flex w-full">
                    <input type="search"  className="border-l border-r-0 border-[#56b533] my-0.5 outline-none place-content-center placeholder:text-gray-300 placeholder:font-thin text-gray-600 font-semibold " placeholder="Buscar productos"/>
                    <button  className="bg-[#56b533] border border-[#56b533] px-5 text-gray-100 rounded-r-md hover:bg-gray-50 hover:text-[#56b533] hover:border-2 text-xl">
                      <RiSearch2Line/>
                    </button>
                  </div>
              </div>
            </div>
            
            <div className="hidden xl:flex justify-end items-center mx-0 lg:space-x-3 lg:mx-16">
              <RiGlobalFill className="text-3xl text-gray-200 hover:text-indigo-700"/>
              <RiMoneyDollarBoxLine className="text-3xl text-gray-200 hover:text-teal-900"/>
              <RiShoppingBasket2Line type="button" className="text-3xl text-gray-200 hover:text-orange-400" />
              <span class="relative items-center inline-flex right-6 top-3 rounded-full h-4 w-4 bg-sky-500"></span>
            </div>
          </div>
          <MenuCateg categ={categ}/>
          {/**Modal de localización */}
          <ModalLocation showL={showL}/>
           
        </div>
              
     
    )
}
export default Header