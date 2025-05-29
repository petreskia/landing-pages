import type { NextPage } from "next";
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs";
import Filters from "../../components/Filters";
import Product from "../../components/Product";
import { Filter, ProductI } from "@/types";
import { URLSearchParams } from "node:url";

async function fetchData(
  size?: string,
  category?: string
): Promise<{
  products: ProductI[];
  productsSizes: Filter[];
}> {
  const productsSizesRes = await fetch("http://localhost:5001/productSizes");
  const productsSizes = await productsSizesRes.json();

  let url = "http://localhost:5001/products?";
  if (category) url += `type=${category}`;
  if (size) url += `${category && "&"}size=${size}`;

  const productsRes = await fetch(url);
  const products = await productsRes.json();
  return { products, productsSizes };
}

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ size: string; category: string }>;
}) {
  const { size, category } = await searchParams;
  const { products, productsSizes } = await fetchData(size, category);
  return (
    <div>
      <Breadcrumbs breadcrumbs={[{ title: "Shop" }]} />

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <Filters sizes={productsSizes} />
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="row">
                {products.length < 0 && (
                  <p>There are no products based on your filter.</p>
                )}
                {products.map((product) => (
                  <Product {...product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
