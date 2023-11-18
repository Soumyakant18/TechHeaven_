import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import "./CartPage.css"
import productImage4 from '../assets/sphone10.jpeg'
import Navbar from '../components/Navbar';

export default function SimpleCheckout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    alert('Your order has been successfully placed!');
  };

  return (
    <section className="h-100" >
      <Navbar />
      <Container className="py-5">
        <Row className="align-items-center">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg="7">
                    <h5 className='continue'>
                      <a href="#!" className="text-body">
                        Continue Shopping
                      </a>
                    </h5>
                    <hr className='hr'/>

                    <div className="mb-4">
                      <p className="mb-1">Shopping cart</p>
                    </div>

                    <Card className="mb-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div className='image'>
                              <img
                                src={productImage4}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Yellow</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div className='h5'>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h5 className="mb-0">$900</h5>
                            </div >
                            <a href="#!" >
                              Remove
                            </a>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg="5">
                    <Card className="bg-primary text-white rounded-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            alt="Avatar"
                          />
                        </div>
                        <Form className="mt-4">
                          <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                              <Form.Label>Cardholder's Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter cardholder's name" />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                              <Form.Label>Card Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter card number" />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                              <Form.Label>Expiration</Form.Label>
                              <Form.Control type="text" placeholder="MM/YYYY" />
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                              <Form.Label>CVV</Form.Label>
                              <Form.Control type="text" placeholder="Enter CVV" />
                            </Form.Group>
                          </Row>
                        </Form>

                        <hr />

                        <div className="d-flex justify-content-between mb-2">
                          <p>Subtotal</p>
                          <p>$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <p>Shipping</p>
                          <p>$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <p>Total(Incl. taxes)</p>
                          <p>$4818.00</p>
                        </div>

                        <Button variant="info" block size="lg" onClick={handleCheckout}>
                          <div className="checkout">
                            <span>
                              Checkout <i className="checkout_btn"></i>
                            </span>
                          </div>
                        </Button>

                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {orderPlaced && (
          <div className="alert alert-success mt-3" role="alert">
            Your order has been successfully placed!
          </div>
        )}
      </Container>
    </section>
  );
}
