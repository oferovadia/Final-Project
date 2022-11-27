import './ProductPage.css';
import { Carousel, Container, Row, Col, Modal } from 'react-bootstrap';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { deleteFromCart, deleteFromWishlist, getItemInWishlist, getProductByID, postToWishlist } from '../../DAL/serverFunctions';
import { postAddToCart } from '../../DAL/serverFunctions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../ToastContainer/Toast';

function ProductPage() {

    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('')
    const [itemInWishlist, setItemInWishlist] = useState(false)

    const location = useLocation()
    const params = useParams()

    useEffect(() => {

        async function getProduct() {
            if (location.state) {
                setProduct(location.state.from)
                isProductInWishlist(location.state.from.id)
            } else {
                setProduct(await getProductByID(params.id))
                isProductInWishlist(params.id)
            }
            setLoading(true)
        }

        async function isProductInWishlist(product_id) {
            const item = await getItemInWishlist(product_id)
            console.log(item);
            if (item.length === 0) {
                setItemInWishlist(true)
            }
        }
        getProduct()
    }, [itemInWishlist])

    function openSizeToast() {
        toast.error('Please select size!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        });
    }

    function openLoginToast() {
        toast.error('Please login!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        });
    }

    function closeModal() {
        window.location.reload();
        setShowModal(false);

    }

    function incrementQuantity() {
        setQuantity(quantity + 1);
        console.log(itemInWishlist)
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToWishlist() {
        postToWishlist({ product_id: product.id })
        window.location.reload();
    }

    function removeFromWishlist() {
        deleteFromWishlist(product.id)
        window.location.reload();
    }

    async function addToCart() {
        if (!size) {
            openSizeToast()
            return;
        }
        const details = {
            product_id: product.id,
            quantity: quantity,
            total: product['productDetails'][0]['unit_price'] * quantity
        }
        if (size !== 'ONE SIZE') {
            details.size = size;
        } else {
            details.size = null
        }
        const itemWasAdded = await postAddToCart(details)
        if (itemWasAdded) {
            setShowModal(true)
        } else {
            openLoginToast()
        }
    }

    function selectSize(e) {
        setSize(e.target.value)
    }

    function setPhotos() {
        return product.photos.map(photo => <Carousel.Item key={photo.id}>
            <img
                className="d-block w-100"
                src={photo.photo_source}
                alt={product.product_name}
            />
        </Carousel.Item>)
    }

    function setPage() {
        return <Row className='mainRow'>
            <Col className='leftSide' lg={5} md={6} sm={12}>
                <Carousel className='carouselDiv'>
                    {setPhotos()}
                </Carousel>
            </Col>

            <Col className='rightSide' lg={5} md={6} sm={12}>
                <h1>{product.product_name}</h1>
                <h3>{product['productDetails'][0]['unit_price']}$</h3>
                <p>This product is deadpool deadpool deadpool deadpool deadpool deadpool
                    deadpool deadpool deadpool deadpool deadpool deadpool
                </p>
                <div className='sizeAndQuantity'>
                    {product.productDetails[0].size ? <select className='selectSize'
                        onChange={selectSize}>
                        <option hidden>Select Size</option>
                        {
                            product.productDetails.map((productDetail) =>
                                <option key={productDetail.id}>{productDetail.size}</option>)
                        }
                    </select> : <select className='selectSize' onChange={selectSize}>
                        <option hidden>Select Size</option>
                        <option>ONE SIZE</option>
                    </select>}
                    <div className='quantityBtn'>
                        <button onClick={decrementQuantity} className='minus'>-</button>
                        <button className='quantityNum'>{quantity}</button>
                        <button onClick={incrementQuantity} className='plus'>+</button>
                    </div>
                </div>

                <div>
                    <button onClick={addToCart} className='addToCartBtn'>ADD TO CART</button>
                    {showModal ?
                        <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Item Was Added To Cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modalBody'>
                                <img
                                    className='modalImage'
                                    src={product.photos[0].photo_source}
                                    alt={product.product_name}
                                />
                                <div className='modalBodyDesc'>
                                    <h4>{product.product_name}</h4>
                                    <p>Quantity: {quantity}</p>
                                    <p>Size: {size}</p>
                                </div>
                            </Modal.Body>
                        </Modal> : ""}
                </div>
                <hr className='breakLine'></hr>
                <div className='wishListDiv'>
                    {
                        itemInWishlist ?
                            <span className='wishlistBtn' onClick={addToWishlist} ><IoMdHeartEmpty className='heartIconProduct' />ADD TO WISHLIST</span>
                            : <span className='wishlistBtn remove' onClick={removeFromWishlist} ><IoMdHeartEmpty className='heartIconProduct' />REMOVE FROM WISHLIST</span>

                    }
                </div>
                <hr className='breakLine'></hr>
            </Col>
            <Toast></Toast>
        </Row>
    }

    return (
        <Container className='mainContainer'>
            {loading ? setPage() : ""}
        </Container>

    )
}

export default ProductPage