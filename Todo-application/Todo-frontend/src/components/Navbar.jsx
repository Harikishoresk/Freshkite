import React from "react";
import { FaPenNib, FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
        <div className=" bg-blue-400">
            <div className="flex justify-between mx-4 items-center h-16">
                <div className="flex justify-between">
                    <FaPenNib />
                    <h1 className="font-bold">TODO app</h1>
                </div>
                
                <div className ="flex items-center space-x-3">
                {/* <button>
                    <FaSun className="text-yellow-300 bg-blue-700 hover:bg-black size-6"/>
                </button> */}
                <button className = "bg-blue-900 hover:bg-black text-white border-spacing-x-2 text-right px-1 py-1">Sign up</button>
                <button className = "bg-blue-900 hover:bg-black text-white text-right px-1 py-1">Sign in</button>

                </div>
        </div>
        </div>
        
        </>
    )
}

export default Navbar;