
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import './index.css';
import  CarouselMain from "./components/Carousel";
import FooterB from "./components/FooterB";


function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
    setShowOrder(false)
  }

  const toggleOrder = () =>{
    setShowOrder(!showOrder);
    setShowMenu(false)
  }
  
  return (
        
        <div className="flex flex-col bg-gray-100 max-w-full h-full">
           <Header/>
           <CarouselMain/>
           
           {/*El cuerpo de la pagina*/}
           <main className="flex flex-col justify-center  ">
              <div className="flex flex-row justify-center mx-[5%]">
                    {/*los productos de la pantalla principal*/}
                    <Card />
                   
              </div>
           </main>
           <footer className="static mt-20 border-b-8 border-gray-900">
              <FooterB/>
           </footer>

          
        </div>
    )
}

export default App
