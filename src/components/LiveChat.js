import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomComments, generateRandomName } from "../utils/helper";

const LiveChat =()=> {

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store)=>store.chat.messages);

    const[liveMessage, setLiveMessage] = useState("");

    useEffect(()=> {
        const i = setInterval(()=> {
            console.log("API Polling");
        

        dispatch(
            addMessage({
                name : generateRandomName(), 
                message : generateRandomComments(20)
            })
         );
        }, 1500);

        return ()=> clearInterval(i);
    }, [])

    return ( <div> 
                    <div className="h-[450px] w-full ml-4 bg-gray-100 shadow-xl border border-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
                        { ChatMessages.map((c, index)=> (
                                <ChatMessage 
                                    key={index}
                                    name={c.name} 
                                    message={c.message}
                                />)
                            )
                        }
                    </div>
                    <form 
                    className="ml-4 p-2 border border-gray-200 w-full" 
                    onSubmit={(e)=> {
                    e.preventDefault();
                    
                    dispatch(
                        addMessage({
                            name : "Aditya",
                            message : liveMessage
                        })
                    )
                    setLiveMessage("");
                    }}
                    >
                        <input type="text" 
                        className=" mx-3 h-8 w-[400px] border border-black rounded-lg"
                        value={liveMessage}
                        onChange={(e)=>setLiveMessage(e.target.value)}
                        />
                        <button className="px-2 py-1 mx-2 bg-slate-400 rounded-lg">Send</button>
                    </form>
            </div>
    )
}

export default LiveChat;