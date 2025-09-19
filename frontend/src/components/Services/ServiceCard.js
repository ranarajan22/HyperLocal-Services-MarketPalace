import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h3 className="text-lg font-bold">{service.name}</h3>
            <p>{service.description}</p>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
                Book Now
            </button>
        </div>
    );
};

export default ServiceCard;
