import { useRestaurants } from "../../hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

export default function PopularRestaurants() {
  const { restaurants } = useRestaurants();

  // Sort the restaurants by the number of reviews (descending) and then by rating (descending)
  const sortedRestaurants = [...restaurants]
    .sort((a, b) => b.reviews - a.reviews || b.rating - a.rating)
    .slice(0, 10); // Take the top 10 restaurants

  return (
    <div className="section">
      <h2>Our most popular restaurants</h2>
      <div className="restaurants">
        {sortedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
