import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredData = [...data].filter(
        (item) => item.category === category
      );
      setCoffee(filteredData);
    } else {
      setCoffee(data.slice(0, 6));
    }
  }, [category, data]);

  const handleShowAllData = () => {
    setCoffee(data.slice(0, 6));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8 my-12">
        {coffee.map((coffee, index) => (
          <Card key={index} coffee={coffee} />
        ))}
      </div>
      <button onClick={() => navigate("/coffees")} className="btn btn-warning">
        Show All
      </button>
      {/* <button onClick={() => setCoffee(data)} className="btn btn-warning">
        Show All
      </button>{" "} */}
      {/* If i need to see all card in one page then use it */}
    </>
  );
};

export default CoffeeCards;
