import React from "react";
import logo from "../assets/image/logo.png";
import NavItem from "./NavItem";

function Navbar(){

    return (
    <nav className="flex justify-between py-3 px-20 shadow-md m-1">
        <img src = {logo} alt="" className="px-3 py-3  " class="object-fill h-20 w-30"/>
        <ul className="flex gap-5 bg-indigo-300 px-2 py-4 rounded-md m-2 hover:bg-white" >
        <NavItem menu="Home" />
        <NavItem menu="About Us"/>
        <NavItem menu="Service"/>
        <NavItem menu="Product"/>
        <NavItem menu="Contact"/>
        </ul>
    </nav>

    )
}

export default Navbar;
