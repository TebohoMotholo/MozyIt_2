import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiMonitor, FiGlobe, FiShoppingCart } from 'react-icons/fi';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="display-4 fw-bold">Empowering Communities Through Technology</h1>
                <p className="lead">Affordable tech support, training & digital services for South Africa’s local businesses, schools, and rural communities.</p>
                <Button variant="light" href="/contact" className="me-3">Contact Us</Button>
                <Button variant="outline-light" href="/services">Our Services</Button>
              </motion.div>
            </Col>
            <Col md={5}>
              <motion.img
                src="/images/hero-illustration.svg"
                alt="Tech Support"
                className="img-fluid"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Who We Are</h2>
              <p>
                Mozy IT is more than a tech business — we’re a digital bridge for underserved communities. Whether you’re a student needing a CV, a small shop needing a flyer, or a business with tech issues, we’re here to help.
              </p>
              <Button variant="primary" href="/about">Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="/images/community-tech.png" alt="Community" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Core Services</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm mb-4">
                <Card.Body>
                  <FiMonitor size={40} className="text-primary mb-3" />
                  <Card.Title>IT Support</Card.Title>
                  <Card.Text>We fix hardware/software issues, set up networks & install systems.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center border-0 shadow-sm mb-4">
                <Card.Body>
                  <FiShoppingCart size={40} className="text-primary mb-3" />
                  <Card.Title>IT Equipment Sales</Card.Title>
                  <Card.Text>
                    We sell affordable laptops, printers, and accessories for learners and businesses.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm mb-4">
                <Card.Body>
                  <FiGlobe size={40} className="text-primary mb-3" />
                  <Card.Title>Web Design</Card.Title>
                  <Card.Text>Affordable websites for NGOs, businesses, and portfolios.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Services CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2>Need Help With a CV, Cover Letter or Typing?</h2>
          <p className="mb-4">We assist local youth, job seekers & students with essential digital services.</p>
          <Button variant="light" href="/community">Explore Community Services</Button>
        </Container>
      </section>

      {/* Contact Banner */}
      <section className="py-5 text-center">
        <Container>
          <h3>Ready to Get Started?</h3>
          <p>Let’s solve your IT challenges, together.</p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </Container>
      </section>
    </>
  );
}
