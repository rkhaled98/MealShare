import React, { Component } from 'react';
// TODO: IMG NOT WORKING
class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <img src="../components/blackhole.jpg" alt="" />
        <h1>This is a cart item for {this.props.name}</h1>
      </div>
    );
  }
}
export default CartItem;
// Example usage: <ShoppingList name="Mark" />
