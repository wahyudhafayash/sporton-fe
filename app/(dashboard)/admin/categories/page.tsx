"use client";
import Button from "@/app/(landing)/_components/ui/Button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../_components/categories/CategoryTable";
import CategoryModal from "../../_components/categories/CategoryModal";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import {
  DeleteCategory,
  getAllCategories,
} from "@/app/service/category.service";
import { toast } from "react-toastify";
import DeleteModal from "../../_components/ui/DeleteModal";

const CategoryManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [categories, setCategories] = useState<Category[]>([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState("");

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log("Failed to fetch categories", error);
    }
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setCategoryToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!categoryToDeleteId) return;
    try {
      await DeleteCategory(categoryToDeleteId);
      fetchCategories();
      toast.success("Category deleted successfully!");
      setIsModalOpen(false);
      setCategoryToDeleteId("");
    } catch (error) {
      console.log("Failed to delete category", error);
      toast.error("Failed to delete category!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Category Management</h1>
          <p className="opacity-50">organize your products into categories</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>
      <CategoryTable
        categories={categories}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <CategoryModal
        category={selectedCategory}
        onSuccess={fetchCategories}
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

export default CategoryManagement;
