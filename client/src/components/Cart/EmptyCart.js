import React, { Component } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class EmptyCart extends Component {
  
  render() {
    
    return (
        <Column>
          <div className="container">
              <div className="column">  
                <h2>Shopping Cart</h2>
                <h3>Your cart is empty</h3>
                <Link to="/">
                <button >
                    <p>Continue Shopping</p>
                </button>
                </Link>
              </div>

              <div className="column col2"> 
                <h2>Total price</h2>  
              </div>
          </div>
        </Column>
        
    );
  }
}

const Column = styled.div `

.container {
  display: grid;
  grid-template-columns: 2fr 1fr; 
  column-gap: 20px;
  margin: 50px;
  height: 100vh;
  max-width: 100%;

}
.column {
  background-color: #fff;

}
h2 {
padding: 20px;
}
h3 {
    text-align: center;
    padding: 50px 0;
}
button {
    color: #fff;
    background: #2D2D2D;
    padding: 15px 20px;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
    border: none;
    display: block;
    margin: 0 auto;
}
@media (max-width: 800px) {
.container {
  display: grid;
  grid-template-columns: 1fr; 
  row-gap: 20px;
 }
   
`