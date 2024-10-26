import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const LetestRecipe = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    // fetch data from API
    const getLatest = async () => {
      const response = await axios.get(
        "https://recipefindermern-fp5v.onrender.com/api/all-items"
      );

      setItems(response.data);
    };
    getLatest();
  }, []);

  return (
    <div className=" px-5 xl:px-10 py-16">
      <h2 className="text-3xl font-semibold text-white sm:text-5xl sm:leading-relaxed">
        Latest recipe
      </h2>

      {/* get all items  */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.length > 0 ? (
          items.slice(0, 4).map((item, index) => {
            return <Card item={item} key={index} />;
          })
        ) : (
          <p>loading...</p>
        )}
      </div>

      <div className=" mt-16 mx-auto sm:w-64">
        <Link to="/recipes">
          <button className=" py-4 px-8 hover:bg-btnColor text-white hover:text-white w-full transition ease-in  duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg ">
            View All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LetestRecipe;
