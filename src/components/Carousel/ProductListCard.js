import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import "./ProductCard.css";
import { BiHeartCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';


function ProductListCard(props) {

  function addddd() {
  }

  const product = props.product
  
  return (
    <div className='cardDiv col-sm-6 col-md-4 col-lg-3'>
      <Card className='h-100'>
        <Link to={`/products/${product.id}`}
          state={{ from: product }}><Card.Img className='cardProductImage'
            variant="top" src={product['photos'][0]['photo_source']} /></Link>
        <Card.Body className='productCardFooter'>
        <Card.Title className='cardListTitle'>{product['product_name']}</Card.Title>
        <Card.Title className='cartListPrice'>{product['productDetails'][0]['unit_price']}$</Card.Title>
          {/*<button className='addToCartBtn'>ADD TO CART</button>*/}
          <button onClick={addddd} className='addToCartBtn2'>ADD TO CART</button>
          <BiHeartCircle className='heartIcon' size={50} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductListCard

