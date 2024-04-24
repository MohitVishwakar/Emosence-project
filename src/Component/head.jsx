import React from "react";
import logo from "../images/emosense-high-resolution-logo-black-transparent.png"
import DarkModeToggle from "./darkmode";
const Head = () => {
    return (
        <>
            <div className="flex items-center justify-between h-24 bg-gray-100 text-gray-800 px-3 " >
                <img src={logo} alt="Emosense Logo" className="h-full ml-5" />
                <nav className="flex mr-1.5" style={{fontFamily: "Righteous",fontWeight:"800",fontStyle:"normal"}}>
                    <a href="#" className="mx-2">Home</a>
                    <a href="#" className="mx-3">How to Use</a>
                    <a href="#" className="mx-2">About</a>
                    <a href="#" className="mx-2">Rate Us</a>
                    <a href="#" className="mx-2"><DarkModeToggle/></a>
                </nav>
            </div> 
        </>
    );
};

export default Head;