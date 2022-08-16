import React from "react";
import logo from "../assets/image/logo.png"
function Practice(){
    return(
        <div>Practice
            <nav className="bg-[#723783]">
                <h3>Logo</h3>
                <h2>Menu</h2>
            </nav>
             <div className="flex justify-center items-center h-screen"> {/*tag the centered the card */}
            <div className="shadow-md w-80" >
            <div className="h-90 overflow-hidden">
                <img src={logo} alt=""/>
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                    <h3 className="font-bold capitalize">PS Console</h3>
                <h6 className=" font-serif">GHS 4500.00</h6>
                </div>
                <h2>Lorem ipsum dolor sit</h2>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eaque delectus ratione nobis magni, voluptas optio maiores ducimus ea vero cumque ex et. Ducimus optio, voluptate porro voluptates recusandae architecto.</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Practice;