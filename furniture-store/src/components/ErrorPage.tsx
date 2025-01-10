import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Error 404</h1>
      <p>you reached a dead end. Go back to </p>
      <Link to="/" className="Link">
        Homepage
      </Link>
    </div>
  );
};
