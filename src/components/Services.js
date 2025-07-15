import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiMonitor, FiWifi, FiCamera, FiGlobe, FiHeadphones, FiTool, FiShoppingCart } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: FiMonitor,
    title: 'IT Support & Maintenance',
    short: 'Onsite & remote troubleshooting, virus removal, repairs.',
    long: 'We provide full hardware/software support for desktops, laptops, and printers, including OS reinstallations, driver issues, and routine maintenance.'
  },
   {
    icon: FiShoppingCart,
    title: 'IT Equipment Sales',
    short: 'Laptops, Computers, Routers, CCTV Cameras/DVRs, Software',
    long: 'We provide affordable IT hardware and software — from laptops and printers to Windows and Office licenses. Perfect for students, teachers, and small businesses in need of trusted tech.'
  },
  {
    icon: FiWifi,
    title: 'Network Setup & Management',
    short: 'LAN/WAN/Wi-Fi install, router config, cable fault-finding.',
    long: 'Professional installation of wired and wireless networks in homes and businesses, including switch and router setups, cabling, and testing.'
  },
  {
    icon: FiCamera,
    title: 'CCTV Installation & Support',
    short: 'Analog/IP cameras, DVR/NVR setup, remote access.',
    long: 'Install and configure high-quality security camera systems with mobile viewing and remote support options.'
  },
  {
    icon: FiGlobe,
    title: 'Website Design & Hosting',
    short: 'Modern responsive sites in React, WordPress, HTML/CSS.',
    long: 'We create fast, responsive websites for businesses, NGOs, and personal brands, and assist with domain & hosting setup.'
  },
  {
    icon: FiHeadphones,
    title: 'Remote IT Support',
    short: 'Secure remote troubleshooting via TeamViewer, AnyDesk.',
    long: 'Need help without us visiting? We troubleshoot devices remotely using secure tools like TeamViewer, Awesun, or AnyDesk.'
  },
  {
    icon: FiTool,
    title: 'IT Consulting & Audits',
    short: 'Infrastructure reviews, upgrade planning, security checks.',
    long: 'We audit your systems and recommend smart, budget-friendly improvements to ensure your tech stays secure and efficient.'
  }
];

export default function Services() {
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
      <h2 className="text-center mb-4">Our Full Suite of Services</h2>
      <Row>
        {services.map((s, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="service-card h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <s.icon size={48} className="mb-3 text-primary" />
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.short}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleShow(s)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Modal for service details */}
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
