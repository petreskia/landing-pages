import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import { Blog, Filter, HomePage, ProductI } from "@/types";
import { fetchRelatedProducts } from "./lib/fetchProducts";

async function fetchData(): Promise<{
  homepage: HomePage;
  categories: Filter[];
  blogs: Blog[];
}> {
  const homepageRes = await fetch("http://localhost:5001/homepage");
  const homepage = await homepageRes.json();

  const categoriesRes = await fetch("http://localhost:5001/productCategories");
  const categories = await categoriesRes.json();

  const blogsRes = await fetch("http://localhost:5001/blogs");
  const blogs = await blogsRes.json();

  return { homepage, categories, blogs };
}

export default async function Home() {
  const { homepage, categories, blogs } = await fetchData();
  const featuredProducts = await fetchRelatedProducts();
  return (
    <>
      <HeroSection homepage={homepage} categories={categories} />

      <FeaturedProducts products={featuredProducts} />

      <LatestBlogs blogs={blogs} />
    </>
  );
}
