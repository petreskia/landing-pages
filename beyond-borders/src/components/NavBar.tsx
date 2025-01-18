import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="nav-bar d-flex w-100 align-items-center justify-content-center">
      <div className="nav-btn">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/emotions" className="nav-link">
          Emotions
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/guides" className="nav-link">
          Guides
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/professionalhelp" className="nav-link">
          Professional Help
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/aboutus" className="nav-link">
          About Us
        </NavLink>
      </div>
    </nav>
  );
}
