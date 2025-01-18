import { Link } from "react-router";
import Header from "../components/Header";

export default function EmotionsPage() {
  const emotionLinks = (
    <div className="emotion-links">
      <h2>
        <Link to="/emotions/anger" className="emotion-link">
          Anger
        </Link>
      </h2>
      <h2>
        <Link to="/emotions/sadness" className="emotion-link">
          Sadness
        </Link>
      </h2>
      <h2>
        <Link to="/emotions/fear" className="emotion-link">
          Fear
        </Link>
      </h2>
    </div>
  );

  return (
    <div>
      <Header heading={emotionLinks} />
    </div>
  );
}
