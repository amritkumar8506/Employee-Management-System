// import React, { useState, useEffect, useContext } from "react";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import Login from "./components/Auth/Login";
// import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/localStorage";

// const App = () => {
//   // Ensure localStorage has data
//   setLocalStorage();

//   // ✅ Initialize state from localStorage immediately
//   const initialUser = localStorage.getItem("loggedInUser"); // "admin" / "employee" / null
//   const [user, setUser] = useState(initialUser);
//   const [loading, setLoading] = useState(true); // For controlling initial render

//   useEffect(() => {
//     // Small timeout simulates data fetch (or you can skip it)
//     setLoading(false);
//   }, []);

//   // ✅ Don't render anything until loading false
//   if (loading) return null;

//   return (
//     <>
//       {!user && <Login setUser={setUser} />}
//       {user === "admin" && <AdminDashboard />}
//       {user === "employee" && <EmployeeDashboard />}
//     </>
//   );
// };

// export default App;




import React, { useContext, useEffect } from "react";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  
  // ✅ Ensure localStorage has default data
  useEffect(() => {
    setLocalStorage();
  }, []);

  // ✅ Get user and logout from context
  const { user } = useContext(AuthContext);

  // Conditional rendering based on user type
  if (!user) return <Login />;
  if (user === "admin") return <AdminDashboard />;
  if (user === "employee") return <EmployeeDashboard />;

  return null; // fallback
};

export default App;
