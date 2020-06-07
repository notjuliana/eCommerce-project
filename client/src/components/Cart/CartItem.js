import React, { Component } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components'

export default class CartItem extends Component {
  render() {
    const { id, title, description, img, price, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <CartDetail>
      <div className="containerProduct">
        <div className="grid">
          <img
            src={img} className="img" alt=""
          />
        </div>
        
        <div className="grid">
        <div className="title">
        {title}
        </div>
        <div  className="description">
        {description}
        </div>

            <div className="quantity">
              <span onClick={() => {
                  return decrement(id);
                }}
              >
                —
              </span>
              <span className="count">{count}</span>
              <span onClick={() => {
                  return increment(id);
                }}
              >
                +
              </span>
            </div>
        </div>

        <div className="grid grid3">
        <div className="price">
          <strong>
            <span>Price: </span>€ {price}
          </strong>
        </div>

          <div className="cart-icon" onClick={() => removeItem(id)}>
            <DeleteIcon />
          </div>
        </div>
      </div>
          
      </CartDetail>
    );
  }
}
const CartDetail = styled.div `
.containerProduct {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px; 
  align-items: center;
  max-width: 100%;
}
.grid {
  
}
img {
  display: block;
  width: 150px;
  margin: 0 auto;
}
.title {
  font-size: 20px;
  padding: 5px;
}
.description {
  font-size: 15px;
  padding: 5px;
}
.quantity {
  border: 2px solid #2D2D2D;
  width: 100px;
  font-size: 20px;
  padding: 5px;
  margin: 10px;
  
}
.quantity span {
  padding: 7px;
}
.price {
  font-size: 20px;
  right: 0;
}
.cart-icon {
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
}
@media (max-width: 450px) {
  .containerProduct {
    display: flex;
    align-items: center;
  }
   img {
    display: flex;
    width: 100px;  
  }
  .title {
    font-size: 15px;
  }
  .description {
    font-size: 12px;
  }
  .grid3 {
    
  }
  .price {
    font-size: 15px;
    display: block;
    position: relative;
    top: 0px;
  }
  .cart-icon {
    position: absolute;
    display: block;
    
    bottom: 0px;
  }


`