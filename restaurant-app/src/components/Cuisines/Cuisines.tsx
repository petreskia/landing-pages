import { Link } from "react-router-dom";
import { useRestaurants } from "../../hooks/useRestaurants";
import "./Cuisines.css";

export default function Cuisines() {
  const { restaurants, loading } = useRestaurants();

  if (loading) {
    return <p>Loading cuisines...</p>;
  }

  // Extract unique cuisine types
  const cuisineTypes = Array.from(
    new Set(restaurants.map((r) => r.restauranttype))
  );

  return (
    <div className="section">
      <h2>Cuisines</h2>
      <div className="cuisine-buttons">
        {cuisineTypes.map((cuisine) => (
          <Link
            key={cuisine}
            to={`/cuisine/${cuisine}`}
            className="cuisine-btn"
          >
            {cuisine}
          </Link>
        ))}
      </div>
    </div>
  );
}
