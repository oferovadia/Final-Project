import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import "./css.css";
import { BiHeartCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

function ProductListCard(props) {

  function addToCart2(){
    // Cart.addToCart({"hello": "hello"})
  }

  return (
    <div className='cardDiv col-sm-6 col-md-4 col-lg-3'>
      <Card className='h-100'>
        <Card.Img className='cardProductImage' variant="top" src={props.image} />
        <Card.Body className='productCardFooter'>
        <Card.Title className='cartListPrice'>{props.price}$</Card.Title>
          <Card.Title className='cardListTitle'>{props.name}</Card.Title>
          <ButtonGroup className='productButtons' aria-label="Basic example">
            <Button className='cardButtons' variant="secondary" onClick={addToCart2}>Add To Cart</Button>
            <Button className='cardButtons' variant="secondary">Buy Now</Button>
          </ButtonGroup>
          <BiHeartCircle className='heartIcon' size={50} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductListCard

