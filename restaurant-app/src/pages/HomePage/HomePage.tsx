import AllRestaurants from "../../components/AllRestaurant/AllRestaurant";
import Cuisines from "../../components/Cuisines/Cuisines";
import PopularRestaurants from "../../components/PopularRestaurant/PopularRestaurant";
import SurpriseRestaurant from "../../components/SurpriseRestaurant/SurpriseRestaurant";

export default function HomePage() {
  return (
    <div>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </div>
  );
}
