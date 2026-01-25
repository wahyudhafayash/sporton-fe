import Button from "@/app/(landing)/_components/ui/Button";
import Modal from "../ui/Modal";
import ImageUploadPreview from "../ui/ImageUploadPreview";
import { useState } from "react";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
  const [imageFIle, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50">
            <p className="text-xs pb-1">Category Image</p>
            <ImageUploadPreview
              label="category Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="categoryname">Category Name</label>
              <input
                type="text"
                id="categoryname"
                name="categoryname"
                placeholder="e.g. Running shoes"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows={5}
                placeholder="Category Details..."
              ></textarea>
            </div>
          </div>
        </div>
        <Button className="ml-auto mt-2 rounded-md">Create Category</Button>
      </div>
    </Modal>
  );
};

export default CategoryModal;
