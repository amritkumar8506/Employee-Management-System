
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ tasks }) => {
  const { updateTaskStatus, currentEmployee } = useContext(AuthContext);

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
         className="flex-shrink-0 w-[300px] min-h-[200px] p-5 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 flex flex-col justify-between"

        >
          <div className="flex justify-between items-center">
            <h3 className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
              New
            </h3>
            <h4 className="text-gray-400 text-sm">{task.taskDate}</h4>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-white">{task.taskTitle}</h2>
          <p className="text-gray-300 text-sm mt-2">{task.taskDescription}</p>

         <div className="flex gap-4 mt-4">
  <button
    className="w-[100px] text-center bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
    onClick={() =>
      updateTaskStatus(currentEmployee.email, task.id, "completed")
    }
  >
    Complete
  </button>
  <button
    className="w-[100px] text-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
    onClick={() =>
      updateTaskStatus(currentEmployee.email, task.id, "failed")
    }
  >
    Fail
  </button>
</div>

        </div>
      ))}
    </>
  );
};

export default NewTask;
