import CategoriesSection from "./_components/home/CategoriesSection";
import HeroSection from "./_components/home/HeroSection";
import ProductSection from "./_components/home/ProductSection";
import { getAllCategories } from "../service/category.service";

const Home = async () => {
  const categories = await getAllCategories();

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductSection />
    </main>
  );
};

export default Home;
