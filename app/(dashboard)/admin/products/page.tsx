"use client";
import Button from "@/app/(landing)/_components/ui/Button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../_components/products/ProductTable";
import ProductModal from "../../_components/products/ProductModal";
import { useState } from "react";

const ProductMenegement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage your inventory, price and stock.</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable />
      <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductMenegement;
