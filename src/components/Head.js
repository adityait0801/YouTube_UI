import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect, Component } from "react";
import { YouTube_SEARCH_API } from "../utils/constants";

const Head =()=> {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    //console.log(searchQuery);
    //The api will will be called fot each key stroke.
    // useEffect(()=> {
    //     getSearchSuggestions();
    // }, [searchQuery])

    /* make an api call after every key press
    *but if the difference between the 2 API's is <200 ms
    *decline the api call
    */

    useEffect(()=> {
        const timer = setTimeout(()=>getSearchSuggestions(), 200);

        return ()=> {
            clearTimeout(timer);    
        };

    }, [searchQuery])
    
    // key - i 
    // - render the Component
    // - useEffect()
    // -start timer => make api call after 200 ms

    // key - ip
    // - destroy the component (useEffect return method)
    // - render the Component
    // - useEffect()
    // - start timer = make an api call after 200 ms


    // setTimeout(200) - make an api call



    const getSearchSuggestions = async() => {
        //console.log(searchQuery);
        const data = await fetch(YouTube_SEARCH_API + searchQuery);
        const json = await data.json();
       // console.log(json);
       setSuggestions(json[1]);
    }

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
        <div className="col-span-10 text-center relative">
            <div className="relative">
                <input 
                type="text"
                className="w-1/2 border border-gray-400 px-2 rounded-l-full py-1"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=> setShowSuggestions(true)}
                onBlur={()=> setShowSuggestions(false)}
                />
                <button className="bg-gray-200 px-2 border border-gray-400 rounded-r-full py-1">🔍</button>
            </div>
           { showSuggestions && <div className="absolute bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {
                        suggestions.map((suggestion) => (
                            <li key={suggestion} className="py-2 px-3 shadow-md hover:bg-gray-100">🔍{suggestion}</li>
                        ))
                    }
                </ul>
            </div>}
        </div>
        <div className="col-span-1">
            <img alt="user" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yJWVwI9ZFnJhI3FIB5wIK4Ys7B8J-u5hfQ&usqp=CAU"/>
        </div>
    </div>
}

export default Head;