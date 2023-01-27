import { Footer } from "flowbite-react";
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const FooterB = () => {
    return(
        <Footer bgDark={true} className="flex flex-col justify-center py-5  bg-gray-700 rounded-none  ">
        
            <div className=" mt-4 space-x-14 flex flex-row">
            
                <Footer.Icon 
                    href="#"
                    icon={RiFacebookCircleFill}
                />
                
                
            <Footer.Icon
                    href="#"
                    icon={RiInstagramFill}
                />
                
            
                <Footer.Icon
                    href="#"
                    icon={RiTwitterFill}
                />
                
                
                
            </div>
        </Footer>
    )
}
export default FooterB

