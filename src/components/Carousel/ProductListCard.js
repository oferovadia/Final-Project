import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import "./css.css";

function ProductListCard(props) {
  return (
    <div className='cardDiv col-sm-6 col-md-4'>
      <Card className='h-100'>
        <Carousel>
          <Carousel.Item className='carouselItems'>
            <img
              className="d-block w-100 productImg"
              src={props.image1}
              alt={props.name}
            />
          </Carousel.Item>
          <Carousel.Item className='carouselItems'>
            <img
              className="d-block w-100 productImg"
              src={props.image2}
              alt={props.name}
            />
          </Carousel.Item>
        </Carousel>      <Card.Body>
          <Card.Title className='cardListTitle'>{props.name}</Card.Title>
          <Button className='productCardButton' variant="primary">Go somewhere</Button>
          <p className='heartIcon' onClick={()=> console.log("hello")}>HEART ICON</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductListCard

