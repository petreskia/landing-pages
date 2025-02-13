import { useState, useContext } from "react";
import RestaurantContext from "../../context/RestaurantContext";
import "./ReviewForm.css";

interface ReviewFormProps {
  restaurantId: number;
  updateRestaurantRating: (newRating: number) => void;
}

export default function ReviewForm({ restaurantId }: ReviewFormProps) {
  const { restaurants, setRestaurants } = useContext(RestaurantContext)!;
  const [author, setAuthor] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [stars, setStars] = useState<number>(0);

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAuthor(event.target.value);
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.target.value);
  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStars(Number.parseInt(event.target.value, 10));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newReview = {
      id: Date.now(), // Generate a unique ID for the review
      author,
      comment,
      stars,
      rating: stars,
    };

    // Find the restaurant by ID and add the new review to its reviewsList
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === restaurantId) {
        const updatedReviewsList = [
          ...(restaurant.reviewsList || []), // If reviewsList is undefined, use an empty array
          newReview,
        ];
        const updatedReviewsCount = updatedReviewsList.length;
        const totalStars = updatedReviewsList.reduce(
          (sum, review) => sum + review.stars,
          0
        );
        const updatedRating = totalStars / updatedReviewsCount;

        return {
          ...restaurant,
          reviewsList: updatedReviewsList,
          reviews: updatedReviewsCount,
          rating: updatedRating,
        };
      }
      return restaurant;
    });

    // Update the context with the updated restaurant data
    setRestaurants(updatedRestaurants);

    // Send the updated restaurant data to the backend (db.json)
    try {
      const response = await fetch(
        `http://localhost:5001/restaurants/${restaurantId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            updatedRestaurants.find((r) => r.id === restaurantId)
          ),
        }
      );

      if (response.ok) {
        setAuthor(""); // Reset form
        setComment("");
        setStars(0);
        alert("Review submitted successfully!");
      } else {
        alert("Failed to submit review!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review");
    }
  };

  return (
    <div className="section">
      <h2>Review Form</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="author">Name</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stars">Stars</label>
          <input
            type="range"
            id="stars"
            min="0"
            max="5"
            value={stars}
            onChange={handleStarsChange}
          />
        </div>

        <button type="submit">Leave a review</button>
      </form>
    </div>
  );
}
