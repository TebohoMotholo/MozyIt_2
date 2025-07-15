import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light text-center py-4 mt-auto">
    <Container>
      <Row>
        <Col>
          <p className="mb-1">&copy; {new Date().getFullYear()} Mozy IT. All rights reserved.</p>
          <p className="mb-0">Proudly serving communities across South Africa.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
