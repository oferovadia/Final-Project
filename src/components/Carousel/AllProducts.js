import React from 'react'
import productsImages from '../../DAL/productsImages'
import ProductListCard from './ProductListCard'
import "./css.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { getProducts } from '../../DAL/serverFunctions';
import { useState, useEffect } from 'react';

function AllProducts() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      setProducts(await getProducts())
    }
    getData()
  }, [])

  return (
    <Container>
      <Row className='productsListRows'>
        {
          products.map(({ product_name, photo_source }, index) =>
            <ProductListCard key={index} name={product_name} image={photo_source}></ProductListCard>)
        }
      </Row>
    </Container>
  )
}

export default AllProducts