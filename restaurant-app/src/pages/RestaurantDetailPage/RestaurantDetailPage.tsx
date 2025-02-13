import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import RestaurantContext, { Restaurant } from "../../context/RestaurantContext";
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

export default function RestaurantDetailPage() {
  const { slug } = useParams<{ slug: string }>(); // Get the slug from URL
  const { restaurants } = useContext(RestaurantContext) || { restaurants: [] };

  const [updatedRestaurant, setUpdatedRestaurant] = useState<Restaurant | null>(
    null
  );

  useEffect(() => {
    // Find the restaurant based on slug when restaurants data is available
    if (restaurants.length) {
      const restaurant = restaurants.find((r) => r.slug === slug);
      setUpdatedRestaurant(restaurant || null); // Set the restaurant or null if not found
    }
  }, [restaurants, slug]); // Dependency on restaurants and slug

  // Handle loading state when updatedRestaurant is null
  if (!updatedRestaurant) {
    return <p>Loading...</p>;
  }

  // Function to update the restaurant rating
  const updateRestaurantRating = (newRating: number) => {
    setUpdatedRestaurant((prevRestaurant) => {
      if (!prevRestaurant) return null; // If no restaurant, return null
      return {
        ...prevRestaurant,
        rating: newRating,
      };
    });
  };

  return (
    <div>
      <RestaurantDetailCard restaurant={updatedRestaurant} />
      <ReviewsSection reviews={updatedRestaurant.reviewsList ?? []} />
      <ReviewForm
        restaurantId={updatedRestaurant.id} // Pass the restaurant ID
        updateRestaurantRating={updateRestaurantRating} // Update the rating
      />
    </div>
  );
}
