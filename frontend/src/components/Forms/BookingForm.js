import React, { useState } from "react";

const BookingForm = ({ onBookService }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    serviceName: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBookService) {
      onBookService(formData);
    }
    setFormData({ customerName: "", serviceName: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Book a Service</h2>

      <input
        type="text"
        name="customerName"
        placeholder="Your Name"
        value={formData.customerName}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <input
        type="text"
        name="serviceName"
        placeholder="Service Name"
        value={formData.serviceName}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Book Service
      </button>
    </form>
  );
};

export default BookingForm;
