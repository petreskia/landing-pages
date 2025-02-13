import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Restaurant</h1>
      </Link>

      <Link to="/favorites">
        <i className="fa-solid fa-heart"></i>
      </Link>
    </nav>
  );
}
