import { ProductI } from "@/types";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FeaturedProducts from "../../../components/FeaturedProducts";
import { fetchRelatedProducts } from "@/app/lib/fetchProducts";
import Image from "next/image";

async function fetchData(id: string): Promise<ProductI> {
  const productsRes = await fetch(`http://localhost:5001/products/${id}`);
  const product = await productsRes.json();

  return product;
}

export async function generateStaticParams() {
  const allProductsRes = await fetch("http://localhost:5001/products");
  const allProducts = await allProductsRes.json();

  return allProducts.map((product: ProductI) => ({
    id: product.id,
  }));
}

export default async function ShopDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title, description, filename, information, price, size, type } =
    await fetchData(id);
  const featuredProducts = await fetchRelatedProducts();

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[{ title: "Shop", href: "/shop" }, { title: title }]}
      />

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <Image
                    className="product__details__pic__item--large"
                    src={`/img/products/${filename}`}
                    alt="image"
                    width={300}
                    height={450}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{title}</h3>
                <div className="product__details__price">${price}</div>
                <p>{description}</p>
                <ul>
                  <li>
                    <b>Type</b> <span>{type}</span>
                  </li>
                  <li>
                    <b>Size</b> <span>{size}</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{information}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} />
    </>
  );
}
