import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('/api/services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    return (
        <div>
            <h2>Available Services</h2>
            <ul>
                {services.length > 0 ? (
                    services.map(service => (
                        <li key={service._id}>{service.name} - ${service.price}</li>
                    ))
                ) : (
                    <li>No services available</li>
                )}
            </ul>
        </div>
    );
};

export default ServiceList;
