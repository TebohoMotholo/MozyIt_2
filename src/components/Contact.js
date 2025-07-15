import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiMessageCircle } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Submit using fetch to Formspree
      fetch("https://formspree.io/f/mrblzwkp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setShowModal(true);
            form.reset();
            setValidated(false);
          } else {
            alert("Something went wrong. Please try again.");
          }
        });
    }

    setValidated(true);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      {/* Contact Info */}
      <Row className="mb-5 text-center">
        <Col md={4}>
          <FiMail size={32} className="text-primary mb-2" />
          <p><strong>Email</strong><br /> mozy.infotech@gmail.com</p>
        </Col>
        <Col md={4}>
          <FiPhone size={32} className="text-primary mb-2" />
          <p><strong>Call / WhatsApp</strong><br /> +27 61 402 4333</p>
        </Col>
        <Col md={4}>
          <FiMapPin size={32} className="text-primary mb-2" />
          <p><strong>Location</strong><br /> Mandela Park, Phuthaditjhaba, Free State</p>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" required type="text" placeholder="Your Name" />
                  <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" required type="email" placeholder="Your Email" />
                  <Form.Control.Feedback type="invalid">Valid email is required.</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control name="subject" required type="text" placeholder="Subject" />
              <Form.Control.Feedback type="invalid">Please enter a subject.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                required
                as="textarea"
                rows={5}
                placeholder="Write your message..."
              />
              <Form.Control.Feedback type="invalid">Message is required.</Form.Control.Feedback>
            </Form.Group>

            {/* Optional spam trap */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="text-center">
              <Button type="submit" variant="primary">Send Message</Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Social Media */}
      <Row className="text-center mt-5">
        <Col>
          <a href="https://wa.me/27614024333" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
            <FiMessageCircle size={28} /> WhatsApp
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562549380637" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none">
            <FiFacebook size={28} /> Facebook
          </a>
          {/*<a href="https://instagram.com/mozy_it" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <FiInstagram size={28} /> Instagram
          </a>*/}
        </Col>
      </Row>

      {/* Map Embed (optional) 
      <div className="map-responsive mt-5">
        <iframe
          title="Mozy IT Map"
          src="https://www.google.com/maps/embed?pb=!1m18!..."  // Replace with real embed
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>*/}

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for contacting us. We’ll respond shortly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
