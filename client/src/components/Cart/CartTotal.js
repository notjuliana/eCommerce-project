import React, { Component } from "react";
import styled from 'styled-components'

export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTotal,
      cart
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <TotalCart>
          <div className="totalContainer">
              <div>
                  <div className="subtotal left"> Subtotal: </div>
                  <div className="right">€ {cartSubTotal} </div>

                  <div className="shipping left"> Shipping: </div>
                  <div className="right">€ 9.90 </div>
                  
                  <div className="total left"><strong> Total: </strong></div>
                  <div className="total right"><strong>€ {cartTotal} </strong></div>
              </div>    
          </div>
          </TotalCart>
        )}
      </React.Fragment>
    );
  }
}

const TotalCart = styled.div `
.totalContainer {
    font-size: 20px;
    display: block;
    margin: 20px;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
.shipping {
  
  
}
.total {
  margin-top: 50px;
}
`