


import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { LogOut } from "lucide-react";

const Header = () => {
  const { user, currentEmployee, logout } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-[#1C1C1C] shadow-md">
      {/* Greeting */}
      <h1 className="text-lg md:text-xl font-medium text-white">
        Hello,{" "}
        <span className="text-2xl font-bold tracking-wide text-blue-400">
          {user === "admin" ? "Admin" : currentEmployee?.firstName} 👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-5 py-2 rounded-lg transition-all duration-300 shadow-md"
      >
        <LogOut size={18} />
        Log Out
      </button>
    </header>
  );
};

export default Header;
