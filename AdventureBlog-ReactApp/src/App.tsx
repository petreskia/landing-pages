import "./App.css";
import Banner from "./components/Banner";
import DetailsBlock from "./components/DetailsBlock";
import Footer from "./components/Footer";
import PlaceContainer from "./components/PlacesContainer";

function App() {
  return (
    <div>
      <Banner />
      <DetailsBlock
        title="Stories of Adventure"
        description="Experience the wonders of nature through breathtaking adventures. From serene rivers winding through lush forests to majestic mountains reaching the skies, every moment inspires exploration. Hear the call of the wild, embrace the beauty around you, and let your spirit roam free in these unforgettable journeys through nature’s untamed landscapes."
        imageSrc="https://fastly.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
        imageAlt="nature-1"
      />
      <PlaceContainer />
      <DetailsBlock
        title="Popular Adventures"
        description="Discover breathtaking journeys inspired by the thrill of exploration. Seamless travel across borders makes every adventure unforgettable. From untamed landscapes to distant destinations, let nature’s beauty inspire you. Explore the world’s wonders while embracing the stories waiting to unfold in every breathtaking view. Your journey begins here."
        imageSrc="https://fastly.picsum.photos/id/1051/4928/3264.jpg?hmac=-O25O5Q9z7LI8gDrUkTUmDJir4F9cp1RadCwShIDGms"
        imageAlt="nature-2"
      />
      <Footer />
    </div>
  );
}

export default App;
