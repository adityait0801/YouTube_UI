import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head =()=> {

    const dispatch = useDispatch();

    const toggleMenuHandler =()=> {
        dispatch(toggleMenu());
    }

    return <div className="grid grid-flow-col p-4 m-2 shadow-lg justify-between">
        <div className="flex col-span-1 mx-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            alt="menu" 
            className="h-8 mx-2 cursor-pointer" 
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
            <img alt="logo" className="h-8 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"/>
        </div>
        <div className="col-span-10 text-center">
            <input className="w-1/2 border border-gray-400 px-2 rounded-l-full py-1" type="text"/>
            <button className="bg-gray-200 px-2 border border-gray-400 rounded-r-full py-1">🔍</button>
        </div>
        <div className="col-span-1">
            <img alt="user" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yJWVwI9ZFnJhI3FIB5wIK4Ys7B8J-u5hfQ&usqp=CAU"/>
        </div>
    </div>
}

export default Head;