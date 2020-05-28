import React, { Component } from 'react'
import { ProductConsumer } from "../context"
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export default class Detail extends Component {
    render() {
            
        return ( 
        <DetailPage>
            <ProductConsumer>
            {value => {
              const {
                id,
                img,
                description,
                info,
                price,
                title,
                inCart
              } = value.detailProduct;
    
              return (
           
            <div className="container">
                <div className="row">
                     
                      <img src={img} className="img" alt="" />
                    
                </div>

                <div className="row">
                    <div className="title">
                      <h1>{title}</h1>
                      <h3>{description}</h3>
                    </div>
                       
                    <h4 className="price">
                            <strong>
                            Price: <span>€</span>
                            {price}
                            </strong>
                    </h4>
                    <div className="description">
                        <p> Description: </p>
                        <p>{info}</p>
                    </div>
                    
                    <CartButton
                
                    cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      <span className="text">{inCart ? "IN CART" : "ADD TO CART"}</span>
                      <span>{inCart ? (<CheckCircleIcon />) : (<ShoppingCartIcon />)}</span>
                  
                    </CartButton>
                </div>
            </div>
                
              );
            }}
             
          </ProductConsumer>
        </DetailPage >
        );
    }
}
const DetailPage = styled.div `
.container {
    margin: 50px ;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    font-size: 1.2em;
}
.row {
    margin: 50px;
}
.img {
    width: 100%; 
}
.price {
    font-size: 1.3em;
    margin-top: 20px;
}
.title {
    margin-top: 20px;
}
.description {
    margin-top: 20px;
    width: 100%;
}
@media (max-width: 750px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 30px;
      margin-top: 100px;
      justify-items: center;
    }   
    .row {
        margin: 0;
    }
    .title,
    .price {
        text-align: center;
    }
}
`

const CartButton = styled.div `
    margin: 20px auto;
    border: hidden;
    background: #2D2D2D;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-align: center;
    padding: 5px;
    width: 100%;
    
    span {
        padding: 5px;
    }

    &:hover {
        border: 2px solid #2D2D2D;
        background: #fff;
        color: #2D2D2D;
    }
    
    &:focus {
        outline: none;
    }





`