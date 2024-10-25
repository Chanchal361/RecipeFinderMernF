import React, { useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState({
    name: "",
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
      const signup = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      // console.log("User registered successfully: ", signup);
      // toast.success(sign.data.message)
      // alert("User registered successfully. You can now log in.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing up user: ", error);
      alert("Error signing up user. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#111827] flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Fullname</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={data.name}
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={data.email}
                onChange={handleChange}
                name="email"
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
              Sign Up
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
            <a href="/login" className="text-blue-500">
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
