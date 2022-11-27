import React from 'react'
import { Card } from 'react-bootstrap';
import "./ProductCard.css";
import { BiHeartCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { postToWishlist } from '../../DAL/serverFunctions';
import Toast from '../ToastContainer/Toast';
import { toast } from 'react-toastify';


function ProductListCard(props) {

  const product = props.product

  function addToWishlist() {
    postToWishlist({ product_id: product.id })
    openWishlistToast()
  }

  function openWishlistToast() {
    toast.success(`${product.product_name} was added to wishlist!`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }

  return (
    <div className='cardDiv col-sm-6 col-md-4 col-lg-3'>
      <Card className='h-100'>
        <Link to={`/products/${product.id}`}
          state={{ from: product }}><Card.Img className='cardProductImage'
            variant="top" src={product['photos'][0]['photo_source']} /></Link>
        <Card.Body className='productCardFooter'>
          <Card.Title className='cardListTitle'>{product['product_name']}</Card.Title>
          <Card.Title className='cartListPrice'>{product['productDetails'][0]['unit_price']}$</Card.Title>
          <button className='addToCartBtn'>ADD TO CART</button>
          <button className='addToCartBtn2'>ADD TO CART</button>
          <BiHeartCircle onClick={addToWishlist} className='heartIcon' size={50} />
        </Card.Body>
      </Card>
      <Toast></Toast>
    </div>
  )
}

export default ProductListCard

