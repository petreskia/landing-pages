"use client";

import { useCategoriesStore } from "@/store/categoriesStore";
import { Filter, HomePage } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HeroSection = ({
  homepage,
  categories,
}: {
  homepage: HomePage;
  categories: Filter[];
}) => {
  const { setCategories } = useCategoriesStore();
  const router = useRouter();

  useEffect(() => {
    setCategories(categories);
  }, [categories, setCategories]);

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All departments</span>
              </div>
              <div className="py-3">
                {categories.map((category) => (
                  <div className="sidebar__item__size" key={category.id}>
                    <button
                      onClick={() => {
                        router.push(`/shop?category=${category.slug}`);
                      }}
                    >
                      {category.name}
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-3">{homepage.departmentInfo}</p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__item set-bg">
              <div className="hero__text w-50">
                <span>{homepage.heroSection.preTitle}</span>
                <h2>{homepage.heroSection.title}</h2>
                <p>{homepage.heroSection.desc}</p>
                <Link className="primary-btn" href="/shop">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
