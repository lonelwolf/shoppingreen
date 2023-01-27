import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react"
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import { RiArrowDropRightLine, RiArrowGoForwardLine, RiMailLine, RiLockPasswordLine, RiKeyLine, RiMap2Fill, RiMapPinLine, RiNavigationLine, RiInformationLine } from "react-icons/ri";


const ModalLocation = (props) => {
    const { showL } = props; 
   
    return(
        <>
            <Modal
                show={showL}
                size="2xl"
                popup={true}
                onClose={showL}
            
            >
                 <Modal.Header>
                    <h3 className="font-medium text-justify dark:text-white text-gray-400 pb-2">
                        Lugar de entrega
                    </h3>
                    </Modal.Header>
                <Modal.Body>
               <div className="space-y-6 ">
                    <div>
                        <img src="map.webp" alt="" />
                    </div>
                    <div>
                        <div>
                            <p className="mb-3 text-xl">
                                <strong>Serán mostrados los productos
                                 de la tienda que pueden ser entregados
                                  en la provincia/municipio
                                   que seleccione.
                                </strong><br/>
                           </p><p className="italic text-center text-md text-gray-500"> Si lo desea luego de culminar una compra puede cambiar el destino para una nueva compra.
                            </p>
                        </div>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="prvincia"
                        value="PROVINCIA"
                        />
                    </div>
                    <TextInput
                        id="provincia"
                        type="select"
                        placeholder="Provincia"
                        icon={RiMap2Fill}
                        required={true}
                    />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="municipio"
                        value="MUNICIPIO"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="text"
                        placeholder="Municipio"
                        icon={RiMapPinLine}
                        required={true}
                    />
                    </div>
                    <div className="flex justify-center italic " >
                        <p className="flex items-center mx-10 text-xs"><RiInformationLine/> <span className="mx-5">Proincia / Municipio donde estan habilitadas las ventas</span> </p> 
                    </div>
                    
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-full">
                        <Button 
                            outline={true}
                            gradientDuoTone="purpleToPink"
                            className="">
                            <strong className="flex text-2xl font-bold ">Es aqui <RiNavigationLine className="text-3xl rotate-90 ml-5 hover:rotate-180 transition-all duration-500"/></strong>
                            
                        </Button>
                        <Button
                            color="gray"
                            onClick={showL}
                        >
                            Decline
                        </Button>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        No estoy Localizado?{' '}
                        <a
                            href="/modal"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Que hacer
                        </a>
                    </div>
                </Modal.Footer>
            </Modal>
            </>
    )
}

export default ModalLocation