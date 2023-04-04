import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <section className="contacts" id="contacts">
    <Container className="text-centre">
      <Row className= "align-items-center">
       <Col lg={12} md={12} xs={12}>
       <Row className= "align-text-center">
          <h1>About</h1>
       </Row>
      <p>To provide high-quality computer products and services to our customers.</p>

      <h2>Our Story</h2>
        <p>To provide high-quality computer products and services to our customers.</p>

      <h2>Our Mission</h2>
      <p>To provide high-quality computer products and services to our customers.</p>

      <h2>Our Values</h2>
        <ul>
          <li>Customer satisfaction</li>
          <li>Integrity</li>
          <li>Excellence</li>
        </ul>

      <h2>Our History</h2>
        <p>We have been in business for 10 years, starting as a small local shop and growing into an online store.</p>
    </Col>
    </Row>
    </Container>
    </section>
  );
};

export default About;
