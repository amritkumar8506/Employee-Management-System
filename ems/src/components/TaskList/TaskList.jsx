
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";

const TaskList = () => {
  const { employees } = useContext(AuthContext);

  const currentEmployee = employees.find(
    emp => emp.email === localStorage.getItem("employeeEmail")
  );

  const tasks = currentEmployee?.tasks || [];

  // Filter tasks by status
  const newTasks = tasks.filter(task => task.newTask);
  const completedTasks = tasks.filter(task => task.completed);
  const failedTasks = tasks.filter(task => task.failed);
  const acceptedTasks = tasks.filter(task => task.active && !task.newTask);

  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex gap-5 py-5 px-2">
      <NewTask tasks={newTasks} />
      <CompletedTask tasks={completedTasks} />
      <FailedTask tasks={failedTasks} />
      <AcceptTask tasks={acceptedTasks} />

    </div>


  );
};

export default TaskList;




