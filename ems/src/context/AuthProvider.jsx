
import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => localStorage.getItem("loggedInUser") || null);
    const [employees, setEmployees] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    // Initialize localStorage and employees
    useEffect(() => {
        setLocalStorage();
        const { employees: empData } = getLocalStorage();
        setEmployees(empData);
        setLoading(false);
    }, []);

    // Update currentEmployee whenever employees or user changes
    useEffect(() => {
        if (user && user !== "admin") {
            const email = localStorage.getItem("employeeEmail");
            const emp = employees.find(e => e.email === email);
            setCurrentEmployee(emp || null);
        }
    }, [employees, user]);

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("employeeEmail");
        setUser(null);
        setCurrentEmployee(null);
    };

    const updateEmployee = (updatedEmp) => {
        setEmployees(prevEmployees => {
            const newEmployees = prevEmployees.map(emp =>
                emp.email === updatedEmp.email ? updatedEmp : emp
            );

            // Update currentEmployee if logged-in user
            const email = localStorage.getItem("employeeEmail");
            if (email === updatedEmp.email) setCurrentEmployee(updatedEmp);

            // Sync to localStorage
            localStorage.setItem("employees", JSON.stringify(newEmployees));
            return newEmployees;
        });
    };

    // Add new task to employee
    const addTaskToEmployee = (employeeEmail, task) => {
        setEmployees(prevEmployees => {
            return prevEmployees.map(emp => {
                if (emp.email !== employeeEmail) return emp;

                const taskWithId = { ...task, id: Date.now() };
                const updatedTasks = [...emp.tasks, taskWithId];

                const updatedEmp = {
                    ...emp,
                    tasks: updatedTasks,
                    taskCounts: {
                        newTask: updatedTasks.filter(t => t.newTask).length,
                        completed: updatedTasks.filter(t => t.completed).length,
                        failed: updatedTasks.filter(t => t.failed).length,
                        active: updatedTasks.filter(t => t.active && !t.newTask).length
                    }
                };

                // Update currentEmployee if logged-in
                const email = localStorage.getItem("employeeEmail");
                if (email === emp.email) setCurrentEmployee(updatedEmp);

                // Sync to localStorage
                localStorage.setItem("employees", JSON.stringify(prevEmployees.map(e =>
                    e.email === emp.email ? updatedEmp : e
                )));

                return updatedEmp;
            });
        });
    };

    // Update task status by task id
    const updateTaskStatus = (employeeEmail, taskId, status) => {
        setEmployees(prevEmployees => {
            return prevEmployees.map(emp => {
                if (emp.email !== employeeEmail) return emp;

                const updatedTasks = emp.tasks.map(task => {
                    if (task.id !== taskId) return task;
                    return {
                        ...task,
                        newTask: false,
                        active: status === "accepted",
                        completed: status === "completed",
                        failed: status === "failed"
                    };
                });

                const updatedEmp = {
                    ...emp,
                    tasks: updatedTasks,
                    taskCounts: {
                        newTask: updatedTasks.filter(t => t.newTask).length,
                        completed: updatedTasks.filter(t => t.completed).length,
                        failed: updatedTasks.filter(t => t.failed).length,
                        active: updatedTasks.filter(t => t.active && !t.newTask).length
                    }
                };

                // Update currentEmployee if logged-in
                const email = localStorage.getItem("employeeEmail");
                if (email === emp.email) setCurrentEmployee(updatedEmp);

                // Sync to localStorage
                localStorage.setItem("employees", JSON.stringify(prevEmployees.map(e =>
                    e.email === emp.email ? updatedEmp : e
                )));

                return updatedEmp;
            });
        });
    };

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            employees,
            setEmployees,
            currentEmployee,
            logout,
            updateEmployee,
            addTaskToEmployee,
            updateTaskStatus
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
