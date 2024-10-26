import React, { useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [_, setCookie] = useCookies("access_token");
  const nagivate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://recipefindermern-fp5v.onrender.com/api/login",
        data
      );
      //  console.log("User Login successfully:");
      toast.success(response.data.message);
      console.log(response.data);
      setCookie("access_token", response.data.token);
      window.localStorage.setItem("User Id", response.data.userId);
      nagivate("/");
    } catch (error) {
      console.error(error);
      toast.error("use id ");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#111827] flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login in</h2>
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-4">
            <label className="block text-gray-700">Fullname</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div> */}
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={data.email}
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={data.password}
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div> */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Sign in with Google
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="/signup" className="text-blue-500">
              Don't have account? Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="min-h-screen bg-[#111827] flex items-center justify-center">
    //   <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
    //     <h2 className="text-2xl font-bold mb-6 text-center">Login in</h2>
    //     <form onSubmit={handleSubmit}>
    //       {/* <div className="mb-4">
    //         <label className="block text-gray-700">Fullname</label>
    //         <input
    //           type="text"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={fullname}
    //           onChange={(e) => setFullname(e.target.value)}
    //           required
    //         />
    //       </div> */}
    //       <div className="mb-4">
    //         <label className="block text-gray-700">Email Address</label>
    //         <input
    //           type="email"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700">Password</label>
    //         <input
    //           type="password"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </div>
    //       {/* <div className="mb-4">
    //         <label className="block text-gray-700">Confirm Password</label>
    //         <input
    //           type="password"
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={confirmPassword}
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           required
    //         />
    //       </div> */}
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
    //       >
    //         Login
    //       </button>
    //     </form>
    //     <div className="flex justify-center items-center mt-6">
    //       <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
    //         Sign in with Google
    //       </button>
    //       <button className="bg-blue-700 text-white px-4 py-2 rounded">
    //         Sign in with Facebook
    //       </button>
    //     </div>
    //     <div className="mt-4 text-center">
    //       <a href="/signup" className="text-blue-500">
    //           Don't have account? Sign up
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
