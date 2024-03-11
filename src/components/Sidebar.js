import { useSelector } from "react-redux";

const SideBar =()=> {

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

    if(!isMenuOpen)
    return null;

    return <div className="p-5 shadow-lg w-48">
        <ul>
            <li className="hover:font-bold hover:cursor-pointer">Home</li>
            <li className="hover:font-bold hover:cursor-pointer">Shorts</li>
            <li className="hover:font-bold hover:cursor-pointer">Videos</li>
            <li className="hover:font-bold hover:cursor-pointer">Live</li>
        </ul>
        <h1 className="font-bold pt-5 hover:cursor-pointer">Subscription</h1>
        <ul className="hover:cursor-pointer">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5 hover:cursor-pointer">Watch Later</h1>
        <ul className="hover:cursor-pointer">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5 hover:cursor-pointer">Others</h1>
        <ul className="hover:cursor-pointer">
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>
    </div>
}

export default SideBar;