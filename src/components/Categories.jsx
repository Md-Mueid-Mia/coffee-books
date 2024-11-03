import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
      {categories.map((category, index) => (
        <NavLink
          to={`/category/${category.category}`}
          key={index}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? "tab-active" : " "}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;