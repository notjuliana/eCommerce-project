import React, { Component } from "react"
import CartItem from "./CartItem"
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart, clearCart } = this.props.value;
    return (
      <div >
        {cart.map(item => (
        
          <CartItem key={item.id} item={item} value={value} />
          
        ))}
    <Buttons>
      <div className="containerButton">

        <div className="button">
          <button
            type="button"
            onClick={() => {clearCart()}}>
            Clear Cart
          </button>
        </div>

        <div className="button">
          <Link to="/">
            <button >
              <p>Continue Shopping</p>
            </button>
          </Link>
        </div>
      </div>
    </Buttons>
  </div>
    );
  }
}

const Buttons = styled.div `
.containerButton {
  display: flex;
  width: 100%;
}
div {
  margin: 30px auto;
}
button {
  color: #2d2d2d;
  background: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  border: 2px solid #2d2d2d;
  padding: 15px;
  width: 300px;

  &:link {
    text-decoration: none;
  }
}
@media (max-width: 1050px) {
  .containerButton{
    display: block;
    margin: 0 auto;
  }
   button {
    display: block;
    margin: 0 auto;
   }
  }
`