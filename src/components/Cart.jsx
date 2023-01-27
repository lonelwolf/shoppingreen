import React from "react";
import { RiDashboardLine, RiCloseLine } from "react-icons/ri";
import FooterCart from "./FooterCart";
import CardCar from "./CardCar";


const Cart = (props) => {
    
  
    const {showOrder} = props;
    console.log(showOrder);
    return(
        <div className={`z-20 fixed top-0 bg-white border-2 border-t-[#56b533] border-l-[#56b533] border-b-[#56b533]  lg:w-82  min-h-screen h-full transition-all ${showOrder ? "right-0" : "-right-full"}`}>
                 
              <div className="relative pt-12 lg:pt-0 pl-2 text-[#56b533] h-full">
                  <div className="flex lg:flex-row space-x-6">
                    <RiCloseLine   className="lg:hidden m-3 bg-[#56b533] rounded-full text-4xl text-white "/>
                    <h1 className="text-xl my-4">Ordeen 5884 </h1>
                  </div>
                  
                  {/*Carrito*/}        
                  <div>
                        <div className="flex justify-center space-x-32 text-[#56b533] m-2">
                          <div>
                            <h5 className="">Items</h5>
                          </div>
                          
                          <div className="flex justify-start space-x-10">
                            <h5>Cant</h5>
                          <h5>Precio</h5>
                          </div>
                          
                        </div>  
                        <div className="bg-white h-[500px] overflow-scroll ">
                            {/*Listado de Productos de la orden*/}  
                            <CardCar/>
                            <CardCar/>
                            <CardCar/>
                            <CardCar/>
                        </div>
                        
                  </div>
                  {/*Footer del cart*/}
                  <FooterCart/> 
              </div>

              
            </div>
    )
}

export default Cart