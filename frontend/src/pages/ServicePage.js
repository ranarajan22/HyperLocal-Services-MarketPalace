import React from 'react';
import BookingForm from '../components/Booking/BookingForm';

const ServicePage = ({ match }) => {
    const serviceId = match.params.id;

    return (
        <div>
            <h2>Service Details</h2>
            <BookingForm serviceId={serviceId} />
        </div>
    );
};

export default ServicePage;
