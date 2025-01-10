import { useLoaderData } from "react-router-dom";
import { Card } from "./Card";
import { ProductDetails } from "../interfaces";

export const CardsCont = () => {
  const products = useLoaderData<ProductDetails[]>();

  console.log(products);
  return (
    <div className="CardCont container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">Products</h1>
        </div>
      </div>
      <div className="row">
        {products.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
