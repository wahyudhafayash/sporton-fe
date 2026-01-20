import CategoriesSection from "./_components/home/CategoriesSection";
import HeroSection from "./_components/home/HeroSection";
import ProductSection from "./_components/home/ProductSection";
import { getAllCategories } from "../service/category.service";
import { getAllProducts } from "../service/product.service";

const Home = async () => {
  const [categories, product] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductSection products={product} />
    </main>
  );
};

export default Home;
