import { useContext } from "react";
import RestaurantContext from "../context/RestaurantContext";

export const useRestaurants = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurants must be used within a RestaurantProvider");
  }
  return context;
};
