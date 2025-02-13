import { useParams } from "react-router-dom";
import { useRestaurants } from "../../hooks/useRestaurants";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

export default function CuisineDetail() {
  const { cuisine } = useParams(); // Get cuisine type from URL
  const { restaurants, loading } = useRestaurants();

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  // Filter restaurants by cuisine type
  const filteredRestaurants = restaurants.filter(
    (r) => r.restauranttype === cuisine
  );

  return (
    <div className="section">
      <h2>{cuisine} Restaurants</h2>
      <div className="restaurants">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p>No {cuisine} restaurants found.</p>
        )}
      </div>
    </div>
  );
}
