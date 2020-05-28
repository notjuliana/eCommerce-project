import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default class Product extends Component {
    render() {
        const {id, title, description, img, price, inCart} = this.props.product;
        return (
           <ProductWrapper>
               <div className="card" >
                <ProductConsumer>
                    {value => {
                        return (
                        
                            <div className='img-container' 
                            onClick={() => value.handleDetail(id)}>
                               
                               <Link to="/product">
                                <img src={img} alt=""/>
                               </Link>
                    
                                <button className='cart-button'
                                    onClick={() => {
                                        value.addToCart(id)
                                        value.openModal(id)
                                    }}
                                    >
                                    {inCart ? (<CheckCircleIcon />) : (<AddShoppingCartIcon />)}
                                </button> 
                            </div>
                             )
                     }}  
                </ProductConsumer>
                <div className='card-footer'>
                    <div >
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className='price'>
                        <p> <span>€</span>{price}</p>
                    </div>
                </div>    
                        </div>
           </ProductWrapper> 
           
        )
    }
}

export const ProductWrapper = styled.div`
    .card {
       width: 280px;
       height: 400px;
       padding: 10px;
       margin-top: 100px;
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      
       
   }
   .card:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
   }

    img {
       max-width: 260px;
       max-height: 380px;
    }

    .img-container {
        position: relative;
       
    }
    .card-footer {
        display: flex;
        justify-content: space-between;
        margin: 5px;
    }
        h4 {
        font-size: 1.2em;
        padding: 10px;
        }
        p {
        font-size: 1em;
        
        }
    }
    .price {
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 5px;
    }
    .cart-button {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #fafafa;
        padding: 10px;
        border-radius: 50% 0 0 0;
        border: transparent;
        font-size: 20px;
        outline: none;
        cursor: pointer;
    }
    .cart-button:hover {
        transform: scale(1.1);
        transition: all 5ms linear;
    }
`