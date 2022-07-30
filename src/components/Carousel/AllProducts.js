import React from 'react'
import productsImages from '../../DAL/productsImages'
import ProductCarousel from './ProductCarousel'
import "./css.css";

function AllProducts() {
  return (
    <div className='productsListDiv'>
    {
        productsImages.map(({name, image1, image2}, index) => 
        <ProductCarousel name={name} image1={image1} image2={image2}></ProductCarousel>)
    }
    </div>
  )
}

export default AllProducts