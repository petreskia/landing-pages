import { ProductI } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ filename, price, title, id }: ProductI) => {
  return (
    <Link href={`/shop/${id}`} className="col-lg-3 col-md-4 col-sm-6">
      <div className="product__item">
        <div className="product__item__pic">
          {/* fill out the correct url */}
          <Image
            src={`/img/products/${filename}`}
            alt=""
            width={200}
            height={200}
          />

          <ul className="product__item__pic__hover">
            <li>
              {/* <a href="#"> */}
              <i className="fab fa-facebook"></i>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#"> */}
              <i className="fa fa-retweet"></i>
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#"> */}
              <i className="fab fa-linkedin"></i>
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div className="product__item__text d-block">
          <h6>{title}</h6>
          <h5>${price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Product;
