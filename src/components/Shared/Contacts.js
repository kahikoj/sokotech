import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Contacts = () => {

  
  return (
    <section className="contacts" id="contacts">
    <Container className="text-left">
       <Row className= "align-items-center">
       <Col lg={3} md={4} xs={12}>
      <h1>Contacts</h1>

      <p>Phone: +254 0707 119 162</p>

      <p>Email: jmkjoshua@gmail.com</p>

      <p>Address:  Nairobi, Kenya</p>
      
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
      </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Contacts;

