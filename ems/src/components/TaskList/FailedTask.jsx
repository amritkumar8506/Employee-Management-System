
import React from "react";

const FailedTask = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          key={index}
       className="flex-shrink-0 w-[300px] min-h-[200px] p-5 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 flex flex-col justify-between"

        >
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">
              Failed
            </h3>
            <h4 className="text-gray-400 text-sm">{task.taskDate}</h4>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-white">{task.taskTitle}</h2>
          <p className="text-gray-300 text-sm mt-2">{task.taskDescription}</p>
        </div>
      ))}
    </>
  );
};

export default FailedTask;
