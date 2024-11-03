import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorite = getAllFavorites();
    setCoffees(favorite);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorite = getAllFavorites();
    setCoffees(favorite);
  };
  return (
    <>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. you can view or remove them from here."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8 my-12">
        {coffees.map((coffee, index) => (
          <Card handleRemove={handleRemove} key={index} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
