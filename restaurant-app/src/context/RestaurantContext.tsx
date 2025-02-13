import { createContext, ReactNode, useEffect, useState } from "react";

export interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
  rating: number;
}

export interface Restaurant {
  id: number;
  businessname: string;
  restauranttype: string;
  rating: number;
  reviews: number;
  image: string;
  reviewsList?: Review[];
  slug: string;
  phone: string;
  email: string;
  address: string;
  parkinglot: boolean;
}

interface RestaurantContextType {
  restaurants: Restaurant[];
  loading: boolean;
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);

export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        // Explicitly define the type here
        const updatedRestaurants = data.map((restaurant) => {
          // Check if there are reviews and calculate the rating
          if (restaurant.reviewsList && restaurant.reviewsList.length > 0) {
            const totalStars = restaurant.reviewsList.reduce(
              (sum, review) => sum + review.stars,
              0
            );
            restaurant.rating = totalStars / restaurant.reviewsList.length;
          } else {
            restaurant.rating = 0;
          }
          return restaurant;
        });
        setRestaurants(updatedRestaurants);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurants, loading, setRestaurants }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
