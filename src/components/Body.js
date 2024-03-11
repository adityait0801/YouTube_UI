import SideBar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body =()=> {
    return <div className="flex">   
        <SideBar/>
        <Outlet/>
    </div>
}

export default Body;