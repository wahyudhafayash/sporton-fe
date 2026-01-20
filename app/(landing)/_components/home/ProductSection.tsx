import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { FiPlus } from "react-icons/fi";
import priceformatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TProductsProps = {
  products: Product[];
};

const ProductSection = ({ products }: TProductsProps) => {
  return (
    <section id="product-section" className="container mx-auto mt-32 mb-52.75">
      <h2 className=" font-bold italic text-4xl text-center">
        <span className="text-primary">OUR</span> PRODUCT
      </h2>

      <div className="grid grid-cols-4 gap-5 mt-11">
        {products.map((product) => (
          <Link
            href={`/product/${product.name}`}
            key={product._id}
            className="p-1.5 bg-white hover:shadow-xl rounded-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={600}
                height={600}
                className="aspect-square object-contain pointer-events-none"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus size={24} />
              </Button>
            </div>

            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="font-medium text-primary">
                {priceformatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
