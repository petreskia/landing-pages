import { Review } from "../../context/RestaurantContext";
import "./ReviewsSection.css";

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewSectionProps) {
  return (
    <div className="section">
      {reviews.length > 0 && <h2>Reviews</h2>}
      {reviews.map((review, id) => (
        <div key={id} className="review-box">
          <p>
            <strong>Author:</strong> {review.author}
          </p>
          <p>
            <strong>Message:</strong> {review.comment}
          </p>
          <p>
            <strong>Stars:</strong> {review.stars}
          </p>
        </div>
      ))}
    </div>
  );
}
