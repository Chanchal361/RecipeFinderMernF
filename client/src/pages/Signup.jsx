import React, { useState } from "react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#003366] via-[#004080] to-[#0073e6]">
      <div className="w-full max-w-sm p-8 space-y-4 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between">
          <h2
            className={`text-2xl font-semibold ${
              isLogin ? "text-blue-700" : ""
            }`}
          >
          </h2>
          <h2
            className={`text-2xl font-semibold ${
              !isLogin ? "text-blue-700" : ""
            }`}
          >
          </h2>
        </div>

        <div className="relative flex items-center justify-between mt-8">
          <div
            className={`absolute w-1/2 h-full bg-gradient-to-r from-[#003366] via-[#004080] to-[#0073e6] rounded-full transition-transform duration-500 ease-in-out transform ${
              isLogin ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <button
            className={`w-1/2 text-center p-2 text-lg font-medium ${
              isLogin ? "text-white" : "text-gray-700"
            }`}
            onClick={toggleForm}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-center p-2 text-lg font-medium ${
              !isLogin ? "text-white" : "text-gray-700"
            }`}
            onClick={toggleForm}
          >
            Signup
          </button>
        </div>

        <div className="space-y-4">
          {isLogin ? (
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>
              <div className="text-right">
                <a href="#" className="text-blue-700 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button className="w-full py-2 text-lg font-medium text-white bg-gradient-to-r from-[#003366] via-[#004080] to-[#0073e6] rounded-lg focus:outline-none">
                Login
              </button>
              <div className="text-center">
                Not a member?{" "}
                <a
                  href="#"
                  onClick={toggleForm}
                  className="text-blue-700 hover:underline"
                >
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>
              <button className="w-full py-2 text-lg font-medium text-white bg-gradient-to-r from-[#003366] via-[#004080] to-[#0073e6] rounded-lg focus:outline-none">
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
