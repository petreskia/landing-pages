import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantContext from "../../context/RestaurantContext";
import "./SurpriseRestaurant.css";

const SurpriseRestaurant: React.FC = () => {
  const { restaurants, loading } = useContext(RestaurantContext) || {
    restaurants: [],
    loading: true,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (restaurants.length === 0) {
    return <div>No restaurants available.</div>;
  }

  // Get a random restaurant
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];

  return (
    <div className="surprise-restaurant">
      <h2>Don't know what to eat?</h2>
      <Link
        to={`/restaurant/${randomRestaurant.slug}`}
        className="surprise-link"
      >
        <button>Surprise Me!</button>
      </Link>
    </div>
  );
};

export default SurpriseRestaurant;
