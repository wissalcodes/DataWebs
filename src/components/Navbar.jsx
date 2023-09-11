import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
export default function Navbar(){
    const [nav,setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }
    return(
        <div className="text-white flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4">
            <h1 className="flex w-full text-3xl font-bold text-[#70b148]">meow</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden pt-8 pr-12">
                {
                    !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}></AiOutlineMenu>
                }
            </div>
            <div className={!nav ? " bg-black md:hidden fixed left-0 top-0 w-[60%] h-auto border-r border-r-gray-900  ease-in-out duration-500" : "fixed top-0 w-[60%] h-full border-r border-r-gray-900  m-4 ease-in-out duration-500 left-[-100%] md:hidden" }>
                <ul className="pt-12 uppercase block md:hidden">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
    );
}