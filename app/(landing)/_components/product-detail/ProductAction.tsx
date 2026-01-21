"use client";
import { useState } from "react";
import Button from "../ui/Button";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Product } from "@/app/types";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductActionProps = {
  product: Product;
  stock: number;
};

const ProductAction = ({ product, stock }: TProductActionProps) => {
  const { addItem } = useCartStore();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const incrementQty = () =>
    setQty((prevQty) => (prevQty < stock ? prevQty + 1 : prevQty));
  const decrementQty = () =>
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));

  return (
    <div className="flex gap-5">
      <div className="border border-gray-300 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-300 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-100 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={incrementQty}
          >
            <FiChevronUp />
          </button>
          <button
            className="cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={decrementQty}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="px-20 w-full" onClick={handleAddToCart}>
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button
        variant="dark"
        className="px-20 w-full"
        onClick={() => router.push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductAction;
