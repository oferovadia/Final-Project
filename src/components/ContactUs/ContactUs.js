import React from 'react'
import { Form, FloatingLabel, Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import './ContactUs.css';


export default function ContactUs() {

    function submitForm() {
        alert('Message Was Sent!')
        window.location.reload();
    }

    return (
        <div>
            <div>
                <Container>
                    <Row className='mainContactRow'>
                        <Col className='formCol' lg={6} md={6} sm={12}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Full Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="name" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="email" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId='floatingTextarea'
                                label='How Can We Help?'
                                className="mb-3">
                                <Form.Control style={{ height: '100px' }}
                                    as="textarea" placeholder="comment" />
                            </FloatingLabel>

                            <button className='submitBtnContact'
                                onClick={submitForm}> SUBMIT </button>
                        </Col>
                        <Col className='contactInfoCol' lg={6} md={6} sm={12}>
                            <div className='info'>
                                <h1>GET IN TOUCH</h1>
                                <p>Phone: +972 52 222 3038</p>
                                <p>Email: ovadiaofer@gmail.com</p>
                                <p>Address: Bat Yam, Israel</p>
                                <hr className='breakLine'></hr>
                                <div className='contactIcons'>
                                    <a href='https://www.linkedin.com/in/ofer-ovadia-720aa6221/'
                                        target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className='contactIcon'
                                        />
                                    </a>
                                    <a href='https://www.facebook.com/ofer.ovadia/'
                                        target="_blank" rel="noopener noreferrer">
                                        <FaFacebookSquare className='contactIcon'
                                        />
                                    </a>
                                    <a href='https://github.com/oferovadia'
                                        target="_blank" rel="noopener noreferrer">
                                        <FaGithubSquare className='contactIcon'
                                        />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

