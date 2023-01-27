import { Carousel } from "flowbite-react";
import React from "react";
import Card from "./Card";
Card

const CarouselMainA = () => {
    return (
      <div>
            <div className="grid grid-cols-1 justify-items-center">
              <Carousel slide={true} indicators={false}>
                    <Card/><Card/><Card/><Card/><Card/>
              </Carousel>
            </div>
      </div>
        
    )
}
export default CarouselMainA