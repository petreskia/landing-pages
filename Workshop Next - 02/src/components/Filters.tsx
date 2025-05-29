"use client";

import { useCategoriesStore } from "@/store/categoriesStore";
import { Filter } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Filters = ({ sizes }: { sizes: Filter[] }) => {
  const router = useRouter();
  const search = useSearchParams();
  const { categories } = useCategoriesStore();
  const [size, setSize] = useState<string>(search.get("size") || "");
  const [category, setCategory] = useState<string>(
    search.get("category") || ""
  );

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.has("category")) query.delete("category");
    if (category) query.append("category", category);

    if (query.has("size")) query.delete("size");
    if (size) query.append("size", size);

    router.push(`?${query.toString()}`);
  }, [category, router, size]);

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <h4>Department</h4>
        {category && (
          <div className="mb-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setCategory("")}
            >
              Clear filter <span className="ml-1">&#10005;</span>
            </button>
          </div>
        )}
        {categories.map(({ id, name, slug }) => (
          <div className="sidebar__item__size" key={id}>
            <label className={`${category === slug && "active"}`}>
              {name}
              <input
                type="radio"
                name="product-categories"
                onChange={(e) => setCategory(e.target.checked ? slug : "")}
              />
            </label>
          </div>
        ))}
      </div>
      <div className="sidebar__item">
        <h4>Popular Size</h4>
        {size && (
          <div className="mb-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setSize("")}
            >
              Clear filter <span className="ml-1">&#10005;</span>
            </button>
          </div>
        )}

        {sizes.map(({ id, name, slug }) => (
          <div className="sidebar__item__size" key={id}>
            <label className={`${size === slug && "active"}`}>
              {name}
              <input
                type="radio"
                name="product-sizes"
                onChange={(e) => setSize(e.target.checked ? slug : "")}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
