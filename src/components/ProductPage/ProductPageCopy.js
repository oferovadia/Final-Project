import './productPage2.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function ProductPage2() {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const location = useLocation()
    const product = location.state.from

    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('')

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToCartFunc() {
        setShowModal(true)
    }

    function selectSize(e) {
        setSize(e.target.value)
        console.log(product)
    }

    return (
        <Container className='mainContainer'>
            <Row className='mainRow'>
                <Col className='leftSide' lg={5} md={6} sm={12}>
                    <Carousel className='carouselDiv'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={product.image1}
                                alt={product.name}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={product.image2}
                                alt={product.name}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col className='rightSide' lg={5} md={6} sm={12}>
                    <h1>{product.name}</h1>
                    <h3>{product.price}$</h3>
                    <p>This product is deadpool deadpool deadpool deadpool deadpool deadpool
                        deadpool deadpool deadpool deadpool deadpool deadpool
                    </p>
                    <div className='sizeAndQuantity'>
                        <select className='selectSize' onChange={selectSize}>
                            <option hidden>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                        <div className='quantityBtn'>
                            <button onClick={decrementQuantity} className='minus'>-</button>
                            <button className='quantityNum'>{quantity}</button>
                            <button onClick={incrementQuantity} className='plus'>+</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={addToCartFunc} className='addToCartBtn'>ADD TO CART</button>
                        {showModal ?
                            <Modal show={showModal} onHide={closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Item Was Added To Cart</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='modalBody'>
                                    <img
                                        className='modalImage'
                                        src={product.image1}
                                        alt={product.name}
                                    />
                                    <div className='modalBodyDesc'>
                                        <h4>{product.name}</h4>
                                        <p>Quantity: {quantity}</p>
                                        <p>Size: {size}</p>
                                    </div>
                                </Modal.Body>
                            </Modal> : ""}
                    </div>
                    <hr className='breakLine'></hr>
                    <div className='wishListDiv'>
                        <span className='wishlistBtn' ><IoMdHeartEmpty className='heartIconProduct' />ADD TO WISHLIST</span>
                    </div>
                    <hr className='breakLine'></hr>
                </Col>

            </Row>

        </Container>
    )
}

export default ProductPage2