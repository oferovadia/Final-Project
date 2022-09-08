import './ProductPage.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import { BiHeartCircle } from "react-icons/bi";

function ProductPage() {
    return (
        <Container className='productDiv'>
            <Row className='mainRow'>
                <Col xs={10} lg={12}>
                    <Carousel className='productCarousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i5.walmartimages.com/asr/265dcea9-e647-46b9-b2c2-496797a82a5a_1.7493808aeff712fffc0c01c4a56f7419.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i5.walmartimages.com/asr/137c3e96-38fd-4f4a-b83c-6afc95bf44cb_1.e8cfa4bfbe55389da3f06e7dd9307856.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <Row className='itemTitle'>
                        <h1>Deadpool Plushie</h1>
                    </Row>
                    <Row>
                        <p className='itemDescription'>ITEM DESCRIPTION SFJSODFNAOSDJFNOASDJFNOJASDFOSDFONADSFOJNDSFKSJDMFSDF
                            SDFKSJDFNSDJFNKSJDFNKJSDNFKJKODSMFMOSKDMFOKSDMFOKMDSOFKMOKSDNFKJSDNFJKSDF
                            SDFJNSDJFNSDOFSDNFOJSDNFOJSDNFSDFSDFKMDOSF</p>
                    </Row>
                    <Row className='itemButtonsRow'>
                        <button className='itemButtons'>heart</button>
                        <div className='quantityAndAddDiv'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className='itemButtons'>add to cart</button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage