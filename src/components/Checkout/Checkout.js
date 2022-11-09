import React, { useState, useEffect } from 'react';
import { getCart, getCustomerByID } from '../../DAL/serverFunctions';
import { Form, FloatingLabel, Container, Row, Col } from 'react-bootstrap';
import Cartitem from '../Cart/CartItem';


function Checkout() {

    const [cartDetails, setCartDetails] = useState([]);
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        async function getData() {
            const cartItems = await getCart()
            if (cartItems) {
                setCartDetails(cartItems[1])
            }
        }
        async function getCustomerDetails() {
            const customerDetails = await getCustomerByID()
            if (customerDetails) {
                setCustomer(customerDetails)
            }
        }
        getData()
        getCustomerDetails()
    }, [cartDetails])

    function t() {
        console.log(cartDetails);
        console.log(customer);
    }

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

    return (
        <div>
            <Container>
                <Row className='mainCheckoutRow'>
                    <Col className='delieveryDetails' lg={8} md={8} sm={12}>
                        <h3 className='checkoutH3'>Delivery Details</h3>
                        <div className='formCheckout'>
                            <input placeholder='First Name' value={customer ? customer.first_name : " "}></input>
                            <input placeholder='Last Name' value={customer ? customer.last_name : " "}></input>
                            <input placeholder='Email' value={customer ? customer.email : " "}></input>
                            <input placeholder='Phone' value={customer.phone == null ? '' : customer.phone}></input>
                            <input placeholder='Country' value={customer.country == null ? '' : customer.country}></input>
                            <input placeholder='City' value={customer.city == null ? '' : customer.city}></input>
                            <input placeholder='Address' value={customer.address == null ? '' : customer.address}></input>
                            <input placeholder='Postal Code' value={customer.postal_code == null ? '' : customer.postal_code}></input>

                            {/*<FloatingLabel
                                controlId="floatingInput"
                                label="First Name"
                                className="mb-3"
                                defaultValue={'hiiii'}

                            >
                                <Form.Control type="text" placeholder="name" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Last Name"
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
                                controlId="floatingInput"
                                label="Phone"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="phone" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Country"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="country" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="City"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="city" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="address" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Postal Code"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="postal" />
    </FloatingLabel>*/}
                            <button className='submitBtnCheckout'
                                onClick={t}> SUBMIT </button>
                        </div>
                    </Col>
                    <Col className='cartCheckoutCol' lg={4} md={4} sm={12}>
                        <div className='cartCheckoutDiv'>
                            {cartDetails.map((cartD, index) =>
                                <Cartitem key={index}
                                    id={cartD.id}
                                    product_id={cartD.product_id}
                                    size={cartD.size}
                                    name={cartD['product']['product_name']}
                                    photo={cartD['product']['photos'][0]['photo_source']}
                                    quantity={cartD['quantity']}
                                    price={cartD['total_products_price']}
                                    unit_price={cartD['product']['productDetails'][0]['unit_price']
                                    }></Cartitem>)}
                            {calcSum()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Checkout

