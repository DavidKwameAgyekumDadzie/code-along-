import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage  from "../Hooks/useLocalStorage";

export const TaskContext = createContext({
  task: [],
  setValue: (task) => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { data, setValue } = useLocalStorage("tasks", []);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  return (
    <TaskContext.Provider value={{ tasks, setValue }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
