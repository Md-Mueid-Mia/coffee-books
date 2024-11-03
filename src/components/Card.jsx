import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoTrash } from "react-icons/io5";

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt={name} className="" />
        </figure>
        <div className="p-4">
          <h2 className="text-xl">Name: {name}</h2>
          <p className="">Category: {category}</p>
          <p className="">Type: {type}</p>
          <p className="">Origin: {origin}</p>
          <p className="">Rating: {rating}</p>
          <p className="">Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-5 -right-5 cursor-pointer bg-warning p-3 rounded-full"
        >
          <IoTrash className="text-2xl" />
        </div>
      )}
    </div>
  );
};

export default Card;
