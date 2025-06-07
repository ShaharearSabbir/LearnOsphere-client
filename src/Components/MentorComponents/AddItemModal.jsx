import React, { useState } from "react";
import { Toast, uploadImage } from "../../Utils/Utilities";
import axios from "axios";

const AddItemModal = ({ isOpen, onClose, setNewCategory }) => {
  const [photoURL, setPhotoURL] = useState(null);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const description = e.target.description.value;
    const newCategory = { category, description, photoURL };
    axios
      .post("http://localhost:3000/category", newCategory)
      .then((res) => {
        if (res.data.insertedId) {
          setNewCategory(newCategory);
          Toast.fire({
            icon: "success",
            title: `Successfully Added Category`,
          });
        }
        e.target.reset();
        onClose();
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-[#00000071] flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-lg w-full m-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Category
        </h2>

        <form className="space-y-4" onSubmit={handleAddCategory}>
          <div>
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category name
            </label>
            <input
              type="text"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              placeholder="Enter item name"
            />
          </div>

          <div>
            <label
              htmlFor="itemDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              placeholder="Provide a detailed description"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="courseImage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thumbnail
            </label>
            <input
              onChange={handleImage}
              name="image"
              type="file"
              id="courseImage"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-700 hover:file:bg-blue-100"
              accept="image/*"
            />
            {photoURL && (
              <div className="mt-2 text-center">
                <img
                  src={photoURL}
                  alt="Thumbnail Preview"
                  className="max-h-32 w-auto mx-auto rounded-md border"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Image uploaded successfully!
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-blue-300 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
