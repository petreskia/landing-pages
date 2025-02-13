interface RatingProps {
  rating: number;
  reviews: number;
}

export default function Rating({ rating, reviews }: RatingProps) {
  if (reviews === 0) return null; // Don't render if no reviews

  const formattedRating = Number.isInteger(rating) ? rating : rating.toFixed(1);

  return (
    <div className="rating-container">
      <p className="rating">rating - {formattedRating},</p>
      <span className="reviews">based on {reviews} reviews</span>
    </div>
  );
}
