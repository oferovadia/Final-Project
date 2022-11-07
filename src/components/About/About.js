import "./about.css";
import heroLogo from './heroLogo.png';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import React from 'react'

function About() {
    return (

        <Container className="firstContainer">
            <Row className="firstHomeDiv" >
                <Col lg={6} md={6} sm={6} xs={12}>
                    <h3>Welcome to SuperStore!</h3>
                    <p>SuperStore was made in 2022</p>
                    <p>We love comic book characters, especially Marvel (if you can’t tell by our products)</p>
                    <p>For now, we sell comic books, clothes and lots of different collectable figures</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <img className="captainSalute" alt="Captain America" src="https://source.superherostuff.com/wp-content/uploads/2016/05/Cap-Salute.jpg" />
                </Col>
            </Row>
            {/*<div>
        //     <p className="aboutTitle">About Us</p>
        //     <Container className="aboutUsContainer">
        //     <Row className="aboutRow">
        //     <Col lg={6} md={6} sm={6} xs={12} className="aboutUsDescription">
        //     <p>SuperStore was made in 2022.</p>
        //     <p>We love comic book characters, especially Marvel (if you can’t tell by our products).</p>
        //     <p>For now, we sell comic books, clothes and lots of different collectable figures.</p>
        //     <p>We believe every fan should enjoy affordable merchandise of their favorite characters!</p>
        //     <p>We ship worldwide with the best protection for your items!</p>
        //     </Col>
        //     <Col lg={6} md={6} sm={6} xs={12}>
        //     <img className="captainSalute" alt="Captain America" src="https://source.superherostuff.com/wp-content/uploads/2016/05/Cap-Salute.jpg" />
        //     </Col>
        //     </Row>
        //     </Container>
        // </div>*/}
        </Container>




    )
}

export default About