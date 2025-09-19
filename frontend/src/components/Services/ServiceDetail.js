import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md my-4">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;
