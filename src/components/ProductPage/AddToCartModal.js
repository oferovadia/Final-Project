import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddToCartModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button onClick={handleShow}>
                Launch demo modal
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Added To Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.img} alt={props.name}></img>
                    <p>{props.name}, {props.quantity}, {props.size}</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddToCartModal