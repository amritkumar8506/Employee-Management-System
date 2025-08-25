
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber = () => {
  const { employees } = useContext(AuthContext);

  // Current logged-in employee email from localStorage
  const currentEmployee = employees.find(
    emp => emp.email === localStorage.getItem("employeeEmail")
  );

  const counts = currentEmployee?.taskCounts || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      
      {/* New Task */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
        <h2 className="text-4xl font-bold text-blue-400">{counts.newTask || 0}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-300">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
        <h2 className="text-4xl font-bold text-green-400">{counts.completed || 0}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-300">Completed Task</h3>
      </div>

      {/* Accepted Task */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
        <h2 className="text-4xl font-bold text-yellow-400">{counts.active || 0}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-300">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
        <h2 className="text-4xl font-bold text-red-400">{counts.failed || 0}</h2>
        <h3 className="text-lg mt-2 font-medium text-gray-300">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumber;
