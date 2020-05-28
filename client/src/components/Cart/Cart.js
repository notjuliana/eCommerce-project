import React, { Component } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../../context";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                <div className="column1fr">
                  <h2>Shopping Cart</h2>
                  <CartList value={value} />
                </div>
                <div className="column2fr">
                  <CartTotal value={value} history={this.props.history} />
                </div>
                </React.Fragment>
              );
            } else {
              return ;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
