import React from "react";


const FooterCart = () => {

    return(
        <div className="bg-zinc-800 absolute bottom-0 left-0 w-full text-white px-8 px-4">
                <div className="flex items-center justify-between pt-4">
                <h3>Descuento</h3>
                <span>$0.00</span>
                </div>
                <div className="flex items-center justify-between my-3">
                <h3>Totoal</h3>
                <span>$300.00</span>
                </div>
                {/*Boton para pagar*/}
                <div className="bg-[#56b533] rounded-lg mb-3 px-4 py-2 text-center ">
                <button className="">Paymet</button>
                </div>
        </div>

    )
}

export default FooterCart