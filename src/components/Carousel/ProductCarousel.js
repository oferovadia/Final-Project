import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import "./css.css";

function ProductCarousel(props) {
  return (
      <Card style={{ width: '18rem' }}>
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
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCarousel

