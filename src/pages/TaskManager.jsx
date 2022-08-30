import React, { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import TaskItem from "../components/TaskItem";
//import bg from "../assets/images/bg.png";
import { useTaskContext } from "../context/taskContext";

// const getTasksFromLocalStorage = () => {
//   //get the task from the localstorage
//   const saveTasks = localStorage.getItem("tasks");
//   if (!saveTasks) return [];
//   // We use of the parse method
//   return JSON.parse(saveTasks);
// };
function TaskManager() {
  // const [tasks, setTasks] = useState (getTasksFromLocalStorage);
  const { tasks, setValue } = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") return;
    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };
    // const [input, setInput] = useState("");
    // replace the input in the function below with newTask
    // setTasks([input, ...tasks]);
    setValue([newTask, ...tasks]);
    setInput("");
    
}
const handleDelete = (id) => {
  const newTasks = tasks.filter((tasks) => tasks.id !== id);
  setValue(newTasks);
  // localStorage.setItem("task", JSON.stringify(tasks));
};

const handleCompleted = (id) => {
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });
  setValue(newTasks)
};

const handleEdit = (id) => {
  const newTasks = tasks.filter((task) => {
    if (task.id === id) {
      setInput(task.text);
      return false;
    }
    return task;
  });
  setValue(newTasks);
};
 
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
// console.log(tasks)

return (
  <div className="bg-blue-400 h-screen max-w-2xl w-full flex justify-center items-center">
    {/* <img src={bg} alt="background" className=" absolute w-full h-full object-cover mix-blend-screen "/> */}

    <div className="max-w-xl rounded-xl bg-white py-10 px-5 max-h-96 overflow-hidden shadow-lg">
      <div className="flex justify-center mb-10 bg-blue-700 rounded-2xl py-3 shadow-md">
        <h1 className="text-white text-center text-lg font-extrabold ">
          DAVID'S DIARY
        </h1>
      </div>
      <form
        className="flex space-x-2 w-[30rem] shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border-blue-400 border-2 px-2 py-3 rounded-md 
                    p-2 outline-none w-10/12"
          placeholder="enter item "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          disabled={input === ""}
          type="add"
          className="bg-blue-600 px-6 py-4 text-lg rounded-md text-center font-serif text-white shadow-md"
        >
          Add
        </button>
      </form>
      <div className="mt-6 space-y-2 overflow-y-auto h-56 ">
        {tasks.map((task) => (
          // <TaskItem task = {task} handleDelete = {handleDelete} />))
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  </div>
);
 };

export default TaskManager;
