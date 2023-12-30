import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { admin, setAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin-login", state, {
        withCredentials: true,
      });
      setAdmin(data);

      if (admin) {
        window.localStorage.setItem("admin-access", JSON.stringify(data));
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label className="text-start" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleInput}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                placeholder="Enter Your Email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label className="text-start" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleInput}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="password"
                placeholder="Enter Your Password"
                id="password"
                name="password"
                required
              />
            </div>

            <button className="bg-blue-500 w-full hover:shadow-blue-500 hover:shadow-lg text-white px-7 py-2 mb-3 rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
