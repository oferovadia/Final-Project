import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { getCart } from '../../DAL/serverFunctions';
import "./cart.css";
import Cartitem from './CartItem';

function Cart(props) {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [cartDetails, setCartDetails] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const items = [{
        id: 1, name: 'Spiderman Shirt',
        quantity: 2, price: 10,
        photo: 'https://statics.pampling.com/imagenes/galerias/imagen_39520.jpg?1659010657'
    },
    {
        id: 2, name: 'Groot Shirt',
        quantity: 1, price: 10,
        photo: 'https://statics.pampling.com/imagenes/galerias/imagen_38449.jpg?1659010655'
    },
    {
        id: 2, name: 'Venom Shirt',
        quantity: 2, price: 10,
        photo: 'https://statics.pampling.com/imagenes/galerias/imagen_38991.jpg?1659010656'
    }]



    useEffect(() => {
        async function getData() {
            const cartItems = await getCart()
            // console.log(cartItems[1]);
            setCartDetails(cartItems[1])
            // console.log(cartDetails);
        }
        getData()
    }, [])

    let priceSum = cartDetails.reduce(function (sum, currentObj) {
        return sum + (currentObj.total_products_price)
    }, 0)

    function test(){
        navigate('/checkout')
    }

    return (
        <div>
            <Button onClick={handleShow} className='cartOffcanvas'>
                <BsCart2 className='cartIcon' />
            </Button>
            <Offcanvas className='cartCanvas' show={show} onHide={handleClose} placement={'end'} name={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='myCartTitle'>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartDetails.map((cartD, index) =>
                            <Cartitem key={index}
                                name={cartD['product']['product_name']}
                                photo={cartD['product']['photos'][0]['photo_source']}
                                quantity={cartD['quantity']}
                                price={cartD['total_products_price']}></Cartitem>)
                    }
                    <div className='cartFooter'>
                        <h2 className='toalPrice'>Total Price: {priceSum}$</h2>
                        <button className='checkoutBtn' onClick={test}>Checkout</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart

