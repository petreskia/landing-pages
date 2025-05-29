import { ProductI } from "@/types";

export async function fetchRelatedProducts(): Promise<ProductI[]> {
  const featuredProductsRes = await fetch(
    "http://localhost:5001/products?_start=1&_limit=4"
  );
  const featuredProducts = await featuredProductsRes.json();

  return featuredProducts;
}
