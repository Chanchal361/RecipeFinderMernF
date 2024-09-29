import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import Category from "../Category/Category";
import Card from "../../components/Card";

const Recipes = () => {
    const [items,setItems]=useState([]);
    useEffect(() => {
        // fetch data from API
        const getLatest = async () => {
          const response = await axios.get("http://localhost:5000/api/all-items");
    
          setItems(response.data);
        };
        getLatest();
      }, []);

  return (
    <>
      <Header />
      <div className=" px-6 lg:px-12 py-20">
      <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed text-center">
        All Recipe 
      </h2>
       <Category/>
         <ul className=" mt-20 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                items.map((item) => (
                  <Card key={item._id} item={item}>
                  </Card>
                ))
 
            }
         </ul>

      </div>
    </>
  );
};

export default Recipes;
