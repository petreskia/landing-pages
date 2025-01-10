import { Link } from "react-router-dom";
import { ProductDetails } from "../interfaces";

export const Card = ({ id, price, stars, title }: ProductDetails) => {
  return (
    <div className="Card col-4">
      <Link to={`/details/${id}`}>
        <img src={`/img/${id}.jpg`} alt={title} />

        <h2>{title}</h2>
        <p className="price">{price}</p>
        {Array.from({ length: stars }, (_, i) => {
          return <i key={i} className="fa fa-star" />;
        })}
      </Link>
    </div>
  );
};
