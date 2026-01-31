"use client";
import Button from "@/app/(landing)/_components/ui/Button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../_components/products/ProductTable";
import ProductModal from "../../_components/products/ProductModal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/service/product.service";
import { toast } from "react-toastify";
import DeleteModal from "../../_components/ui/DeleteModal";

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteid] = useState("");

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log("Failed to fetch products", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setProductToDeleteid(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDeleteId) return;
    try {
      await deleteProduct(productToDeleteId);
      fetchProducts();
      toast.success("Product deleted successfully!");
      setIsModalOpen(false);
      setProductToDeleteid("");
    } catch (error) {
      console.log("Failed to delete product", error);
      toast.error("Failed to delete product!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage your inventory, price and stock.</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ProductModal
        product={selectedProduct}
        onSuccess={fetchProducts}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ProductManagement;
