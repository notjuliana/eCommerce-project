import React, { Component } from "react"
import styled from "styled-components"
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"

export default class Modal extends Component {

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div className="" id="modal">
                      <h5>item added to cart</h5>
                      <img src={img} className="img" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <Button
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  .img {
    max-width: 200px;
  }
`

const Button = styled.div `

`
