import { useState } from "react";


const Signup = () => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =async()=> {

        const payload = {
            name,
            email,
            password,
        };

        try
        {
            const data = await fetch("http://localhost:8010/signup", {
            method : 'POST', 
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
            const json = await data.json();
            console.log(json);
         } 
        catch (error) {
         console.log(error);
    }
    }

    return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <label className="block mb-2">Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md mb-4"/>
        <label className="block mb-2">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md mb-4"/>
        <label className="block mb-2">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md mb-4"/>
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
    </div>
)}

export default Signup;