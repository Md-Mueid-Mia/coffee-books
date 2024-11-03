import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import sortBy from "sort-by";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy == "Popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    }
    if (sortBy == "Rating") {
      const sorted = [...data].sort((a, b) => a.rating - b.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("Popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity (DSC)
          </button>
          <button
            onClick={() => handleSort("Rating")}
            className="btn btn-warning"
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8">
        {coffees.map((coffee, index) => (
          <Card key={index} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
