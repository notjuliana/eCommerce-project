import React, { Component } from "react"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
import EmptyCart from "./EmptyCart"
import { ProductConsumer } from "../../context"
import styled from 'styled-components'

export default class Cart extends Component {
  render() {
    return (
      <div>
        
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <ShoppingCart>
                  <div className="container">

                    <div className="column col1"> 
                    <h2>Shopping Cart</h2>
                    <CartList value={value} />
                    </div>
                     <div className="column col2"> 
                    <h2>Total price</h2>  
                    <CartTotal value={value} history={this.props.history} />
                    </div>

                  </div>
                </ShoppingCart>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>
       
      </div>
    );
  }
}

const ShoppingCart = styled.div`
.container {
  display: grid;
  grid-template-columns: 2fr 1fr; 
  column-gap: 20px;
  margin: 50px;
  height: 100%;
  max-width: 100%;
 
}
.column {
  background-color: #fff;
}
h2 {
padding: 20px;
}
@media (max-width: 800px) {
.container {
  display: grid;
  grid-template-columns: 1fr; 
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
  margin: 20px;
 }
 
}
`