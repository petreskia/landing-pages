import Link from "next/link";
import React from "react";
import Product from "./Product";
import { ProductI } from "@/types";

const FeaturedProducts = ({ products }: { products: ProductI[] }) => {
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>

        <div className="row">
          <div className="col text-center">
            <Link className="primary-btn" href="/shop">
              See all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
