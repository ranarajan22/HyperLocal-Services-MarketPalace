// backend/controllers/bookingController.js
const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const { service, date, time, address } = req.body;

    if (!service || !date || !time || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      user: req.user.id, // comes from auth middleware
      service,
      date,
      time,
      address,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
