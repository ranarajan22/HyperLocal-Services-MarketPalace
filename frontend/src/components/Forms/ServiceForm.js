import React, { useState } from "react";

const ServiceForm = ({ onAddService }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddService) {
      onAddService(formData);
    }
    setFormData({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Add a Service</h2>

      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Service Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Service
      </button>
    </form>
  );
};

export default ServiceForm;
