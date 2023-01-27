import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react"
import { RiArrowDropRightLine, RiArrowGoForwardLine, RiMailLine, RiLockPasswordLine, RiKeyLine } from "react-icons/ri";


const ModalUser = (props) => {
    const { show } = props; 
   
    return(
        <>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={!show}
            
            >
                <Modal.Header />
                <Modal.Body>
                <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className="rounded-lg p-2 text-xl font-medium dark:text-white box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
                    Bienvenidos a la plataforma
                    </h3>
                    <div>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="email1"
                        value="Correo"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@dominio.com"
                        icon={RiMailLine}
                        required={true}
                    />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="password"
                        value="Contraseña"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        icon={RiKeyLine}
                        required={true}
                    />
                    </div>
                    <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                        Recordar contraseña
                        </Label>
                    </div>
                    <a
                        href="/modal"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                        Contraseña perdido?
                    </a>
                    </div>
                    <div className="w-full">
                    <Button 
                        outline={true}
                        gradientDuoTone="purpleToPink">
                        Acceso
                        <RiArrowDropRightLine className="text-3xl"/>
                    </Button>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    No estas Registrado?{' '}
                    <a
                        href="/modal"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                        Crear usuario
                    </a>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            </>
    )
}

export default ModalUser