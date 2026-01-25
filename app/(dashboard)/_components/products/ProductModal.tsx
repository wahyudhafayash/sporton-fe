import Button from "@/app/(landing)/_components/ui/Button";
import Modal from "../ui/Modal";
import ImageUploadPreview from "../ui/ImageUploadPreview";
import { useState } from "react";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  const [imageFIle, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50">
            <h2 className="text-xs mb-2">Product Image</h2>
            <ImageUploadPreview
              label="Product Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="ProductName">Product Name</label>
              <input
                type="text"
                id="productname"
                name="productname"
                placeholder="e.g. Running shoes"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="Price">Price (IDR)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="e.g. 500000"
                />
              </div>
              <div className="input-group-admin">
                <label htmlFor="Stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="e.g. 100"
                />
              </div>
            </div>

            <div className="input-group-admin">
              <label htmlFor="Category"> Category</label>
              <select name="Category" id="Category">
                <option value="" disabled>
                  Select Category
                </option>
                <option value="">Running</option>
                <option value="">Football</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={6}
            placeholder="Product Details..."
          ></textarea>
        </div>
        <Button className="ml-auto mt-2 rounded-md">Create Product</Button>
      </div>
    </Modal>
  );
};

export default ProductModal;
