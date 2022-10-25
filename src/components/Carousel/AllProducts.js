import React from 'react'
import ProductListCard from './ProductListCard'
import "./ProductCard.css";
import { getAllProducts, getByCategory } from '../../DAL/serverFunctions';
import { useState, useEffect } from 'react';
import { Col, Accordion, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


function AllProducts() {

  const [products, setProducts] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    async function getData() {
      setProducts(await getAllProducts())
      if (categoryName) {
        setProducts(await getByCategory(categoryName))
      }
    }
    getData()
  }, [categoryName])

  return (

    <div className='mainProductsContainer'>
      <Row className='mainProcutsRow'>
        <Col lg={2} md={2} sm={12} xs={12}>
          <Accordion className='categoriesDiv'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Clothes</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/products/category/AllClothes'>All Clothes</Link></p>
                <p><Link to='/products/category/Shirts'>Shirts</Link></p>
                <p><Link to='/products/category/Sweatshirt'>Sweatshirt</Link></p>
                <p><Link to='/products/category/Hats'>Hats</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Figures</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/products/category/AllFigures'>All Figures</Link></p>
                <p><Link to='/products/category/ActionFigures'>Action Figures</Link></p>
                <p><Link to='/products/category/POP'>POP!</Link></p>
                <p><Link to='/products/category/KeyChains'>Key Chains</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Comic</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/products/category/Comics'>Comic Books</Link></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Row className='productsListRows'>
            {
                products.map(( product, index) =>
                  <ProductListCard key={index}
                    product={product}>
                  </ProductListCard>)
            }
          </Row>
        </Col>
      </Row>
    </div>


  )
}

export default AllProducts