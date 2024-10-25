import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const DeskTop = ({ menuItem, logo }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <div className=" h-16 flex justify-between items-center px-6 lg:px-12 ">
      <Link to="/">
        {/* <img src={logo} alt="" /> */}
        <h1 className="text-2xl text-white font-bold">𝑅𝑒𝒸𝒾𝓅𝑒𝐹𝒾𝓃𝒹𝑒𝓇</h1>
      </Link>
      <ul className="flex gap-7">
        {menuItem?.map((item, index) => (
          <li key={index}>
            <Link to={item} className=" font-medium capitalize text-teal-50">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {!cookies.access_token ? (
        <ul className="flex items-center gap-4 font-medium">
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
      ) : (
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link to="/">
              <button
                onClick={logout}
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
              >
                Log out
              </button>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Add
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DeskTop;
