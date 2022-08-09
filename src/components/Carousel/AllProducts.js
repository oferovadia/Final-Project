import React from 'react'
import productsImages from '../../DAL/productsImages'
import ProductListCard from './ProductListCard'
import "./css.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function AllProducts() {
  return (
    <Container>
      <Row className='productsListRows'>
        {
          productsImages.map(({ name, image1, image2 }, index) =>
            <ProductListCard name={name} image1={image1} image2={image2}></ProductListCard>)
        }
      </Row>
    </Container>
  )
}

export default AllProducts