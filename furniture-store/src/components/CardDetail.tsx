import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductDetails } from "../interfaces";
import products from "../library";
import { Banner } from "./Banner";
import { ErrorPage } from "./ErrorPage";

export const CardDetail = () => {
  const { id } = useParams();
  const [search] = useSearchParams();
  console.log(search.get("jovana"));
  //   const [card, setCard] = useState<ProductDetails>();

  //   useEffect(() => {
  //     if (id) setCard(products.find((el) => el.id === parseInt(id)));
  //   }, [id]);

  let card: ProductDetails | undefined = undefined;
  if (id) card = products.find((el) => el.id === +id);
  if (!id || !card) return <ErrorPage />;

  const { price, title, stars, id: cardId, desc } = card;

  return (
    <>
      <Banner title={title} />
      <div className="CardDetail container">
        <div className="row">
          <div className="col-6">
            <img src={`/img/${cardId}.jpg`} alt="" />
          </div>
          <div className="col-6 info-cont">
            <p className="price">{price}</p>
            <h2 className="title">{title}</h2>
            {Array.from({ length: stars }, (_, i) => {
              return <i className="fa fa-stars" key={i} />;
            })}
            <p>{desc}</p>
            <button className="button">Add to card</button>
          </div>
        </div>
      </div>
    </>
  );
};
