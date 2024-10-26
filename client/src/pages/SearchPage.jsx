import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

import axios from "axios";
import Card from "../components/Card";
const SearchPage = () => {
  const searchText = useParams();
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //   console.log(results);?
  //   console.log(query)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParams = params.get("query");
    if (queryParams) {
      setQuery(queryParams);
      // searchRecipe(queryParams);
    }
  }, []);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://recipefindermern-fp5v.onrender.com/api/items`,
          {
            params: { q: query },
          }
        );
        setResults(response.data);
      } catch (error) {
        setError(error.message || "Error getting");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Header />
      <div className=" px-6 lg:px-12 py-20">
        <h1 className=" text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
          Search
        </h1>

        <div className=" bg-white p-4 rounded-full relative flex items-center md:max-w-3xl mx-auto">
          <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300" />
          <input
            onChange={handleSearch}
            className=" outline-none w-full placeholder:text-[#1b2629]"
            type="search"
            name="query"
            placeholder="Search for a recipe"
            id="search"
            value={query}
            required
          />
        </div>
        <ul className=" mt-20 grid grid-flow-col md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {results &&
            results?.map((item) => <Card key={item._id} item={item}></Card>)}
        </ul>
      </div>
    </>
  );
};

export default SearchPage;
