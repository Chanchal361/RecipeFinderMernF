import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, href, backgroundColor, color }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href} className="rounded-full">
        <div className=" uppercase px-6 py-2 rounded-full" style={style}>
          {name}
        </div>
      </Link>
    </div>
  );
};

const CategoryList = () => {
  return (
    <div
      className="flex flex-wrap items-center
       justify-center gap-8"
    >
      <CategoryItem
        name="indian"
        href="/categories/indian"
        // backgroundColor="#f0f5c4"
        backgroundColor="#e5f7f3"
        color="#59871f"
      />
      <CategoryItem
        name="american"
        href="/categories/american"
        // backgroundColor="#efedfa"
        backgroundColor="#e5f7f3"
        color="#3c3a8f"
      />
      <CategoryItem
        name="British"
        href="/categories/british"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
       <CategoryItem
        name="Chinese"
        href="/categories/chinese"
        // backgroundColor="#e8f5fa"
        backgroundColor="#e5f7f3"
        color="#397a9e"
      />
       <CategoryItem
        name="Thailand"
        href="/categories/thailand"
        // backgroundColor="#feefc9"
        backgroundColor="#e5f7f3"
        color="#d16400"
      />
       {/* <CategoryItem
        name="drinks"
        href="/categories/drinks"
        // backgroundColor="#ffeae3"
        backgroundColor="#e5f7f3"
        color="#f0493e"
      /> */}
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};

export default Category;
