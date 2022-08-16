import React, { useState } from "react";
import TaskItem from "./TaskItem";
//import bg from "../assets/images/bg.png";



function TaskManager (){
   const [tasks, setTasks] = useState ([]);
   const [input, setInput] = useState("");

//function needed to reset browser default setting on submit to refresh page

   const handleSubmit = (e) =>{
    e.preventDefault();
    if(input==="")return;

    //This function captures the input made by user
    setTasks([input, ...tasks]);
    setInput("");
   };
   
    return(

        <div className="bg-blue-400 h-screen flex justify-center items-center">
          
            {/* <img src={bg} alt="background" className=" absolute w-full h-full object-cover mix-blend-screen "/> */}

            <div className="max-w-xl rounded-xl bg-white py-10 px-5 max-h-96 overflow-hidden" >
            <div className="flex justify-center mb-10 bg-blue-700 rounded-2xl py-3" ><h1 className="text-white text-center text-lg font-extrabold ">To-Do-List</h1></div>
                <form onSubmit={handleSubmit} className="flex space-x-2 w-[30rem]">
               
                    <input onChange={(e) => setInput(e.target.value)} type="text" className="border-blue-400 border-2 px-2 py-3 rounded-md 
                    p-2 outline-none w-10/12" placeholder="enter a list " value={input}/> 
                <button type="add" className="bg-blue-600 px-6 py-4 text-lg rounded-md text-center font-serif text-white">Add</button>
                </form>
                <div className="space-y-2 overflow-y-auto h-56 ">
                    {
                        tasks.map((task) => (<TaskItem task = {task}/>))
                    }
                    
                </div>
            </div>
            
                
        
        </div>
    );
}

export default TaskManager;

