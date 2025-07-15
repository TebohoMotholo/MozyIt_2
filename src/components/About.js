import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUserCheck, FiCpu, FiGlobe } from 'react-icons/fi';
import './About.css';

const team = [
  {
    name: 'Teboho Motholo',
    role: 'Founder & Lead Specialist',
    img: '/images/Teboho.webp'
  }
];

export default function About() {
  return (
    <Container className="py-5">
      {/* Section: Introduction */}
      <h2 className="text-center mb-4">About Mozy IT</h2>
      <p className="lead text-center mb-5 px-md-5">
        Mozy IT is a community-driven tech company dedicated to bridging the digital divide in South African rural areas.
        From small households to large businesses, we provide expert IT support, training, and access to digital tools.
      </p>

      {/* Section: Mission */}
      <Row className="mb-5">
        <Col md={6}>
          <h4>Our Mission</h4>
          <p>
            To empower communities — especially in under-resourced areas — through accessible, affordable, and professional IT services that uplift education, employment, and entrepreneurship.
          </p>
        </Col>
        <Col md={6}>
          <h4>Our Story</h4>
          <p>
            Mozy IT was founded by Teboho Motholo, who began his journey assisting teachers with basic computer support. With years of hands-on experience and a passion for community growth, Teboho turned a dream into a growing business helping others embrace technology confidently.
          </p>
        </Col>
      </Row>

      {/* Section: Why Choose Us */}
      <h4 className="text-center mb-4">Why Choose Mozy IT?</h4>
      <Row className="mb-5 text-center">
        <Col md={3}>
          <FiCheckCircle size={40} className="text-primary mb-2" />
          <p><strong>Reliable</strong><br /> We respond quickly and solve real problems efficiently.</p>
        </Col>
        <Col md={3}>
          <FiUserCheck size={40} className="text-primary mb-2" />
          <p><strong>Customer Focused</strong><br /> Every service is tailored to the user's needs.</p>
        </Col>
        <Col md={3}>
          <FiCpu size={40} className="text-primary mb-2" />
          <p><strong>Tech Experts</strong><br /> From networking to web development — we've got it.</p>
        </Col>
        <Col md={3}>
          <FiGlobe size={40} className="text-primary mb-2" />
          <p><strong>Community First</strong><br /> We believe access to tech should be a right, not a luxury.</p>
        </Col>
      </Row>

      {/* Section: Meet the Team */}
      <h4 className="text-center meet-team-heading">Meet the Team</h4>
      <Row className="mb-5">
        {team.map((member, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="about-card text-center border-0 shadow-sm">
                <Card.Img variant="top" src={member.img} alt={member.name} className="about-img" />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Section: Call to Action */}
      <div className="text-center">
        <h5 className="mb-3">Need affordable and trusted IT help?</h5>
        <Button variant="primary" href="/contact">Contact Us Now</Button>
      </div>
    </Container>
  );
}
