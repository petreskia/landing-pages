import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage/RestaurantDetailPage";
import CuisineDetailPage from "./pages/CuisineDetailPage/CuisineDetailPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/restaurant/:slug" element={<RestaurantDetailPage />} />
          <Route path="/cuisine/:cuisine" element={<CuisineDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
