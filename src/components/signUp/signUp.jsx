import React,{useState} from "react";
import { Link } from "react-router-dom";
import Auth from "../appwrite/authentication";
import Login from "./loginImage.jpg"
import { useNavigate } from "react-router-dom";

export default function SignUp(){
        const navigate = useNavigate();
        const [name,setName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
    const handleForm = async(event)=>{
            event.preventDefault();
            await Auth.signUp(email,password,name);
            navigate("/signin");
    }
    return(
        <>
        <div className=" w-screen flex ">
            <div className="w-1/2 h-full m-9">
                <div className="flex flex-col">
                    <p className="text-6xl font-serif font-bold">Sign Up</p>
                    
                </div>
                <div className="h-60 w-full flex justify-center items-center">
                <form onSubmit={handleForm} className=" h-1/2 w-2/3 flex flex-col">
                <label className="text-2xl m-2 font-semibold">UserName</label>
                    <input
                    className="m-1 p-2 border-gray-700 w-full bg-slate-200"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />

                    <label className="text-2xl m-2 font-semibold">Email</label>
                    <input
                    className="m-1 p-2 border-gray-700 w-full bg-slate-200"
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <label className="text-2xl  m-2  font-semibold">Password</label>
                    <input
                    className="m-1 p-2 border-gray-700 w-full bg-slate-200"
                    type="text"
                    placeholder="enter email"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                    <div className="text-center m-2">
                        <button className="bg-black text-white m-1 p-2 w-full rounded-sm">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <img src={Login} alt='loginImage' />
            </div>
        </div>
        </>
    );
}