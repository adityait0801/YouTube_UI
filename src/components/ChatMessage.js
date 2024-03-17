

const ChatMessage =({name, message})=> {
    return <div className="flex items-center">
            <img alt="user" className="h-6 ml-4 mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yJWVwI9ZFnJhI3FIB5wIK4Ys7B8J-u5hfQ&usqp=CAU"/>
            <span className="ml-2 mt-2 font-bold">{name}</span>
            <p className="ml-3 mt-2">{message}</p>
     </div>
}

export default ChatMessage;