import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FiFileText,
  FiMail,
  FiGlobe,
  FiType,
  FiBookOpen,
  FiMessageSquare
} from 'react-icons/fi';
import './CommunityServices.css';

const communityServices = [
  {
    icon: <FiFileText size={48} className="text-primary mb-3" />,
    title: 'CV Creation & Revamp',
    short: 'Professional CV formatting and updates.',
    long: 'We create clean, modern CVs that reflect your skills, education, and work history. We also revamp old CVs to align with current hiring standards, perfect for young job seekers and graduates.'
  },
  {
    icon: <FiMail size={48} className="text-primary mb-3" />,
    title: 'Cover Letter Writing',
    short: 'Tailored cover letters for job applications.',
    long: 'We write personalized cover letters for different job types and assist you in explaining your qualifications clearly and professionally to stand out from other applicants.'
  },
  {
    icon: <FiGlobe size={48} className="text-primary mb-3" />,
    title: 'Online Applications & Email Setup',
    short: 'Help applying for jobs, bursaries, and more.',
    long: 'We assist you in creating Gmail or Yahoo accounts and applying for jobs, internships, government opportunities, or university applications online — ideal for those unfamiliar with digital processes.'
  },
  {
    icon: <FiType size={48} className="text-primary mb-3" />,
    title: 'Typing & Document Services',
    short: 'Typing, printing, scanning, USB backups.',
    long: 'From basic typing and formatting to printing school assignments, ID copies, and letters, we offer fast, reliable document support. We also assist with USB backups and file transfers.'
  },
  {
    icon: <FiBookOpen size={48} className="text-primary mb-3" />,
    title: 'Basic Computer Lessons',
    short: 'Intro to using computers & software.',
    long: 'For beginners who want to learn how to use computers, we offer step-by-step guidance on Microsoft Word, email, browsing, typing, and basic computer safety.'
  },
  {
    icon: <FiMessageSquare size={48} className="text-primary mb-3" />,
    title: 'Social Media & Poster Help',
    short: 'WhatsApp, Facebook pages, poster design.',
    long: 'Need help creating a WhatsApp group or Facebook business page? Want a custom event poster or business flyer designed and printed? We’ve got you covered!'
  }
];

export default function CommunityServices() {
  const [show, setShow] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleShow = (service) => {
    setActiveService(service);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveService(null);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Community Services</h2>
      <Row>
        {communityServices.map((service, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="community-card h-100 border-0 shadow-sm text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.short}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleShow(service)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{activeService?.long}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
