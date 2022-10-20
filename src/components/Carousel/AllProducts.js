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
              products.map(({ productDetails, photos, product_name, id,
                description }, index) =>
                <ProductListCard key={index}
                  name={product_name}
                  price={productDetails[0]["unit_price"]}
                  image1={photos[0]["photo_source"]}
                  image2={photos[1]["photo_source"]}
                  desc={description}
                  productDetails={productDetails}
                  id={id}>
                </ProductListCard>)
            }
          </Row>
        </Col>
      </Row>
    </div>


  )
}

export default AllProducts