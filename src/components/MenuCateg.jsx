import { Sidebar } from "flowbite-react"
import { RiArrowDropRightLine, RiDashboardLine, RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri"

const MenuCateg = (props) => {
const {categ} = props;

    return(
        <div className={`absolute mt-2 bg-gray-300 w-fit z-1 transition-all duration-30000 ${categ ? "left-0" : "-left-full"}`}>
            
                <Sidebar aria-label="Default sidebar example" className="">
                    <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                        href="#"
                        icon={RiDashboardLine}
                        >
                        <p className="text-2xl text-gray-700 font-bold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                        <div className="flex justify-between items-center space-x-5 text-xl hover:bg-green-200 rounded-md px-6 cursor-pointer">
                            <p className="text-gray-500 font-semibold ">
                            Dashboard
                            </p>
                            <RiArrowDropRightLine/>
                        </div>
                        
                        <Sidebar.Item
                        href="#"
                        icon={RiArrowDropRightLine}
                        label="3"
                        >
                        <p className="text-xl text-gray-500 font-semibold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={RiArrowDropRightLine}
                        >
                        <p className="text-xl text-gray-500 font-semibold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={RiArrowDropRightLine}
                        >
                        <p className="text-xl text-gray-500 font-semibold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={RiLoginBoxLine}
                        >
                        <p className="text-xl text-gray-500 font-semibold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={RiLogoutBoxRLine}
                        >
                        <p className="text-xl text-gray-500 font-semibold ">
                        Dashboard
                        </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
                

        </div>
    )
}
export default MenuCateg