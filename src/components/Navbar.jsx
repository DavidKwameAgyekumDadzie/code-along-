import React from "react"
import Navitem from "./Navitem";
import logo from "../assets/img/logo.jpeg"


const links = [
    {
        label: "Home",
        to: "/",
    },

    {
        label: "Products",
        to: "/products"
    },

    {
        label: "Task Manager",
        to: "/task-manager"
    },

    {
        label: "About",
        to: "/about"
    },

    {
        label: "Contact",
        to: "/contact"
    }
   
]


function Navbar (){
    return(
        <div className='shadow-md py-7 px-5 bg-gradient-to-br from-green-400 to-pink-300'>
        <nav className="flex justify-between py-5 px-20 shadow-md">
           <div className="flex justify-between gap-2">
            <img className="w-10 h-10" src={logo} alt="sheflogo" />
            <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 ">SHeF Natural Clinic</h1>
            </div>
            <ul className="flex gap-5">
                {links.map((link, index) => (
                        <Navitem key={index} label={link.label} to={link.to} />
                    ))
                }
               
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;