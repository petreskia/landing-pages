import { Restaurant } from "../../context/RestaurantContext";
import "./RestaurantDetailCard.css";
import Rating from "../Rating/Rating";

interface RestaurantDetailCardProps {
  restaurant: Restaurant;
}

export default function RestaurantDetailCard({
  restaurant,
}: RestaurantDetailCardProps) {
  return (
    <div className="section">
      <h2>{restaurant.businessname}</h2>
      <div className="detail-card">
        <img src={restaurant.image} alt={restaurant.businessname} />
        <div className="card-info">
          <Rating rating={restaurant.rating} reviews={restaurant.reviews} />
          <p>{restaurant.phone}</p>
          <p>{restaurant.email}</p>
          <p>{restaurant.address}</p>
          {restaurant.parkinglot && (
            <p>We have a parking lot waiting for you</p>
          )}
        </div>
      </div>
    </div>
  );
}
