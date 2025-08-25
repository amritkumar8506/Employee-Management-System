import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLocalStorage } from "../../utils/localStorage";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const { setUser } = useContext(AuthContext); // context
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // toggle state

    const handleLogin = (e) => {
        e.preventDefault();

        const { employees, admin } = getLocalStorage();

        // Admin check
        const adminUser = admin.find(
            (a) => a.email === email && a.password === password
        );
        if (adminUser) {
            setUser("admin");
            localStorage.setItem("loggedInUser", "admin");
            setError("");
            setEmail("");
            setPassword("");
            return;
        }

        // Employee check
        const employeeUser = employees.find(
            (emp) => emp.email === email && emp.password === password
        );
        if (employeeUser) {
            setUser("employee");
            localStorage.setItem("loggedInUser", "employee");
            localStorage.setItem("employeeEmail", employeeUser.email);
            setError("");
            setEmail("");
            setPassword("");
            return;
        }

        // Invalid login
        setError("Invalid email or password");
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72]">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl shadow-black/40 p-10 sm:p-12 w-[90%] max-w-md">
                <h2 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide">
                    Welcome Back 👋
                </h2>
                <p className="text-gray-300 text-center mb-8">
                    Login to access your dashboard
                </p>

                <form onSubmit={handleLogin} className="flex flex-col items-center gap-5">
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="outline-none bg-white/10 border-2 border-transparent focus:border-cyan-400 text-white font-medium text-lg py-3 px-6 rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 w-full shadow-inner"
                    />

                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none bg-white/10 border-2 border-transparent focus:border-cyan-400 text-white font-medium text-lg py-3 px-6 rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 w-full shadow-inner"
                        />
                        <div
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white text-xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 text-white font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 py-3 px-8 w-full rounded-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(0,200,255,0.6)] transition-all duration-300 cursor-pointer"
                    >
                        Log in
                    </button>
                </form>

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <p className="text-gray-300 text-center mt-6 text-sm">
                    Don’t have an account?{" "}
                    <a href="#" className="text-cyan-400 font-semibold hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
