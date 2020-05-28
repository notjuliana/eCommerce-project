import React, { Component } from 'react'
import Product from './Product'
import { storeProducts } from "../data";
import { ProductConsumer } from '../context'
import styled from 'styled-components'


export default class ProductList extends Component {
    state = {
      products: storeProducts
    };

    render() {
      return (
        <React.Fragment>
          <Card >
            <div >
              
              <div className="container">
                <ProductConsumer>
                  { value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </Card>
        </React.Fragment>
      );
    }
  }

  const Card = styled.div`
    
  .container {
    display: grid;
    grid-template-columns: repeat(3, auto) ;
    column-gap: 0px;
    justify-items: center;
    margin-botton: 50px;
    position: relative;
  }    
    @media (max-width: 1105px) {
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 30px;
        justify-items: center;
      }   
    }
    @media (max-width: 750px) {
      .container {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 30px;
        margin-top: 30px;
        justify-items: center;
      }   
    }
  
  `