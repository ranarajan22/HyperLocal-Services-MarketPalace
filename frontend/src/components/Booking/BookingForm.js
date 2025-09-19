import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ serviceId }) => {
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/bookings', { service: serviceId, date });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">Book Service</button>
        </form>
    );
};

export default BookingForm;
