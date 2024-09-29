import React from "react";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
const Mobile = ({ menuItem, logo, onClose, onOpen, hide }) => {
  return (
    <div className=" h-16 flex justify-between items-center px-6 lg:px-12">
      <Link to="/">
        {/* <img src={logo} alt="" />
         */}
        <h1 className="text-2xl text-white font-bold">𝑅𝑒𝒸𝒾𝓅𝑒𝐹𝒾𝓃𝒹𝑒𝓇</h1>
      </Link>
      <button onClick={onOpen} className=" border border-primary rounded">
        <FaBars className=" w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hide} flex justify-center items-center`}
      >
        <button onClick={onClose} className=" absolute right-8 top-32">
          <RxCrossCircled className=" w-7 h-7" />
        </button>

        <div>
          <ul className=" flex flex-col gap-5">
            {menuItem?.map((item, index) => (
              <li key={index}>
                <Link
                  className="font-medium capitalize text-secondary text-2xl"
                  to={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <ul className=" flex items-center gap-4 font-medium mt-10">
            <li>
              <Link to="/signup">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                >
                  Sign up
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
