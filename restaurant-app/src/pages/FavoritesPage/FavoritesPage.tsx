import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useRestaurants } from "../../hooks/useRestaurants";
import { useFavoriteStore } from "../../store/favoriteStore";

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore(); // Get the favorite restaurant IDs
  const { restaurants, loading } = useRestaurants(); // Fetch all restaurant data

  // Filter favorite restaurants based on the favorites state
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.includes(restaurant.id)
  );

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  return (
    <div className="section">
      <h2>Your Favorite Restaurants</h2>
      <div className="favorites-list">
        {favoriteRestaurants.length > 0 ? (
          favoriteRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p>No favorites yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
}
