import { Carousel } from "flowbite-react";
import React from "react";

const CarouselMain = () => {
    return (
      <div className="flex justify-center z-10">
            <div className="m-4 mb-10 w-full ">
              <Carousel slide={true} className="h-56 sm:h-64 xl:h-56 2xl:h-96" >
                  <img src="imagesbaner1.jpg" alt="" className=" rounded-2xl"/>
                  <img src="imagesbaner2.jpg" alt="" className=" rounded-2xl"/>
                  <img src="imagesbaner3.jpg" alt="" className=" rounded-2xl"/>
                  <img src="imagesbaner4.jpg" alt="" className=" rounded-2xl"/>
              </Carousel>
            </div>
      </div>
        
    )
}
export default CarouselMain