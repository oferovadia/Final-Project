import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../DAL/serverFunctions';
import "./cart.css";
import Cartitem from './CartItem';

function Cart() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [cartDetails, setCartDetails] = useState([]);

    const handleShow = () => setShow(true);

    function handleClose() {
        setShow(false);
    }

    useEffect(() => {
        async function getData() {
            const cartItems = await getCart()
            if (cartItems) {
                setCartDetails(cartItems[1])
            }
        }
        getData()
    }, [cartDetails])



    function calcSum() {
        if (cartDetails) {
            const sum = cartDetails.reduce(function (sum, currentObj) {
                return sum + (currentObj.total_products_price)
            }, 0)
            return <h2 className='toalPrice'>Total Price: {sum}$</h2>
        } else {
            return <h2 className='toalPrice'>Total Price: 0$</h2>
        }
    }

    function test() {
        console.log(cartDetails);
        handleClose()
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
                    {cartDetails ?
                        cartDetails.map((cartD, index) =>
                            <Cartitem key={index}
                                id={cartD.id}
                                product_id={cartD.product_id}
                                size={cartD.size}
                                name={cartD['product']['product_name']}
                                photo={cartD['product']['photos'][0]['photo_source']}
                                quantity={cartD['quantity']}
                                price={cartD['total_products_price']}
                                unit_price={cartD['product']['productDetails'][0]['unit_price']
                                }></Cartitem>)
                        : ""}
                    <div className='cartFooter'>
                        {calcSum()}
                        <button className='checkoutBtn' onClick={test}>Checkout</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart

