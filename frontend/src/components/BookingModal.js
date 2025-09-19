// frontend/src/components/BookingModal.js
import React, { useState, useEffect } from "react";

const BookingModal = ({ isOpen, onClose, defaultService }) => {
  const [service, setService] = useState(defaultService || "");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState(""); // ✅ new state

  // update when parent changes
  useEffect(() => {
    setService(defaultService || "");
  }, [defaultService]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Book Service</h2>

        {/* Service Input */}
        <label className="block mb-2 font-medium">Service</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Date Input */}
        <label className="block mb-2 font-medium">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Location Input */}
        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Booking confirmed:", { service, date, location });
              alert(`Booked ${service} on ${date} at ${location}`);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
