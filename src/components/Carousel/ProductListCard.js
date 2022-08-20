import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import "./css.css";
import { BiHeartCircle } from "react-icons/bi";


function ProductListCard(props) {
  return (
    <div className='cardDiv col-sm-6 col-md-4'>
      <Card className='h-100'>
        <Card.Img className='cardProductImage' variant="top" src={props.image} />
        <Card.Body className='productCardFooter'>
        <Card.Title className='cartListPrice'>15$</Card.Title>
          <Card.Title className='cardListTitle'>{props.name}</Card.Title>
          <ButtonGroup className='productButtons' aria-label="Basic example">
            <Button className='cardButtons' variant="secondary">Add To Cart</Button>
            <Button className='cardButtons' variant="secondary">Buy Now</Button>
          </ButtonGroup>
          <BiHeartCircle className='heartIcon' size={50} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductListCard

