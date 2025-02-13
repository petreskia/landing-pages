import { Link } from "react-router-dom";
import "./RestaurantCard.css";
import { useFavoriteStore } from "../../store/favoriteStore";
import Rating from "../Rating/Rating";

interface RestaurantProps {
  restaurant: {
    id: number;
    businessname: string;
    restauranttype: string;
    rating: number;
    reviews: number;
    image: string;
    slug: string;
  };
}

export default function RestaurantCard({ restaurant }: RestaurantProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore(); // Remove 'favorites' since it's not needed

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents event from bubbling to the Link
    event.preventDefault(); // Prevents Link navigation

    if (isFavorite(restaurant.id)) {
      removeFavorite(restaurant.id);
    } else {
      addFavorite(restaurant.id);
    }
  };

  // Conditionally format the rating
  // const formattedRating = Number.isInteger(restaurant.rating)
  //   ? restaurant.rating
  //   : restaurant.rating.toFixed(1);

  return (
    <div className="restaurant-card">
      <Link to={`/restaurant/${restaurant.slug}`}>
        <div className="restaurant-card-inner">
          <div className="card-top">
            <img
              src={restaurant.image || "/placeholder.svg"}
              alt={restaurant.businessname}
            />
            <button
              className="favorite-btn"
              aria-label="Add to favorites"
              onClick={handleFavoriteClick} // Handle favorite button click
            >
              <i
                className={`fa-heart ${
                  isFavorite(restaurant.id) ? "fa-solid" : "fa-regular"
                }`} // Change icon based on favorite status
              ></i>
            </button>
          </div>
          <div className="card-content">
            <div className="restaurant-info">
              <h3 className="restaurant-name">{restaurant.businessname}</h3>
              <h4 className="restaurant-type">{restaurant.restauranttype}</h4>
            </div>
            {/* {restaurant.reviews > 0 && (
              <div className="rating-container">
                <p className="rating">rating - {formattedRating},</p>
                <span className="reviews">
                  based on {restaurant.reviews} reviews
                </span>
              </div>
            )} */}
            <Rating rating={restaurant.rating} reviews={restaurant.reviews} />
          </div>
        </div>
      </Link>
    </div>
  );
}
