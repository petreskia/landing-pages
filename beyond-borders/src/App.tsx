import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./App.css";
import EmotionsPage from "./pages/EmotionsPage";
import HomePage from "./pages/HomePage";
import AngerPage from "./pages/AngerPage";
import SadnessPage from "./pages/SadnessPage";
import FearPage from "./pages/FearPage";
import GuidesPage from "./pages/GuidesPage";
import ProfessionalHelpPage from "./pages/ProfessionalHelpPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emotions" element={<EmotionsPage />} />
        <Route path="/emotions/anger" element={<AngerPage />} />
        <Route path="/emotions/sadness" element={<SadnessPage />} />
        <Route path="/emotions/fear" element={<FearPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/professionalhelp" element={<ProfessionalHelpPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
