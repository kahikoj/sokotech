import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Services = ({ services }) => {
  return (
    <section className="contacts" id="contacts">
    <Container className="text-left">
       <Row className= "align-items-center">
       <Col lg={6} md={6} xs={12}>
      <h1>Services</h1>
      <p>We sell computers</p>
      {services && services.map(service => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </Col>
    </Row>
  </Container>
  </section>
  );
};

export default Services;

