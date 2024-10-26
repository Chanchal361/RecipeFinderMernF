import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";
import Header from "../../components/header/Header";
import axios from "axios";
import Card from "../../components/Card";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(category);

  useEffect(() => {
    const fetchCategory = async (req, res) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://recipefindermern-fp5v.onrender.com/api/categories/${category}`
        );

        setItems(response.data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [category]);

  return (
    <div>
      <Header />
      <div className="px-6 lg:px-12 py-20">
        <h1 className=" text-center text-3xl py-10 font-semibold text-white sm:text-6xl sm:leading-relaxed capitalize">
          {category}
        </h1>
        <Category />

        <ul
          className=" mt-20    
        container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4
        "
        >
          {items &&
            items.map((item) => (
              <li key={item._id}>
                <Card item={item} key={item._id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
