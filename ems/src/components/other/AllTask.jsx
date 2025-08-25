

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext); // Get employees from context

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl mt-6">
      
      {/* Header */}
      <div className="grid grid-cols-5 bg-gray-700 text-white py-3 px-4 rounded-t-2xl font-semibold text-sm md:text-base">
        <span>Employee Name</span>
        <span>New Task</span>
        <span>Active Task</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>

      {/* Rows */}
      <div className="space-y-3 mt-3">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-5 bg-gray-800 hover:bg-gray-700 transition-all text-white py-4 px-4 rounded-2xl shadow-lg items-center text-sm md:text-base"
          >
            <span className="font-medium">{emp.firstName}</span>
            <span className="text-blue-400 font-semibold">{emp.taskCounts.newTask}</span>
            <span className="text-yellow-300 font-semibold">{emp.taskCounts.active}</span>
            <span className="text-green-400 font-semibold">{emp.taskCounts.completed}</span>
            <span className="text-red-400 font-semibold">{emp.taskCounts.failed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
