import React from 'react'
import ProductListCard from './ProductListCard'
import "./css.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { getAllProducts, getByCategory } from '../../DAL/serverFunctions';
import { useState, useEffect } from 'react';
import { Col, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


function AllProducts() {

  const [products, setProducts] = useState([])
  const {categoryName} = useParams()

  useEffect(() => {
    async function getData() {
      setProducts(await getAllProducts())
      if(categoryName){
        setProducts(await getByCategory(categoryName))
        console.log(categoryName);
      } else {
        console.log(categoryName);

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
                <p><Link to='/products/Clothes'>All Clothes</Link></p>
                <p><Link to='/products/Shirts'>Shirts</Link></p>
                <p><Link to='/products/Sweatshirt'>Sweatshirt</Link></p>
                <p><Link to='/products/Hats'>Hats</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Figures</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/products/Figures'>All Figures</Link></p>
                <p><Link to='/products/ActionFigures'>Action Figures</Link></p>
                <p><Link to='/products/POP'>POP!</Link></p>
                <p><Link to='/products/KeyChains'>Key Chains</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Comic</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/products/Comics'>Comic Books</Link></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Row className='productsListRows'>
            {
              products.map(({ productDetails, photos, product_name }, index) =>
                <ProductListCard key={index}
                  name={product_name}
                  price={productDetails[0]["unit_price"]}
                  image={photos[0]["photo_source"]}>
                </ProductListCard>)
            }
          </Row>
        </Col>
      </Row>
    </div>


  )
}

export default AllProducts