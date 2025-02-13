import { useRestaurants } from "../../hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

export default function AllRestaurants() {
  const { restaurants, loading } = useRestaurants();

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  return (
    <div className="section">
      <h2>All Restaurants</h2>
      <div className="restaurants">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
