import React from 'react';

const Services = ({ services }) => {
  return (
    <div>
      <h1>Services</h1>
      <p>We sell computers</p>
      {services && services.map(service => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

