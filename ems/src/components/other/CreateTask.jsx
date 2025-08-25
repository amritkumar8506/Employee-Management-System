
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, updateEmployee } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateTask = () => {
    if (!title || !description || !date || !assignedTo) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const email = assignedTo.trim().toLowerCase();
    const employee = employees.find(emp => emp.email.toLowerCase() === email);
    if (!employee) {
      alert("❌ Employee not found");
      return;
    }

    const newTask = {
      id: Date.now(),
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category,
      newTask: true,
      active: false,
      completed: false,
      failed: false,
    };

    const updatedEmp = {
      ...employee,
      tasks: [...employee.tasks, newTask],
      taskCounts: {
        ...employee.taskCounts,
        newTask: employee.taskCounts.newTask + 1,
      },
    };

    updateEmployee(updatedEmp);

    // Clear form
    setTitle("");
    setDescription("");
    setDate("");
    setAssignedTo("");
    setCategory("");

    alert("✅ Task created successfully!");
  };

  return (
    <div className="m-15 p-8 bg-[#1a1a1a] rounded-3xl shadow-xl border border-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
        ✨ Create New Task
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Task Title
            </label>
            <input
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm text-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Assign To (Email)
            </label>
            <input
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm text-white"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Enter employee email"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Category
            </label>
            <input
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, Development..."
            />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            Description
          </label>
          <textarea
            className="w-full bg-gray-800 border border-gray-600 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm text-white h-[230px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
          />
        </div>
      </form>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={handleCreateTask}
        >
          🚀 Create Task
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
