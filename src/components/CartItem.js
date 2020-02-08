import React, { Component } from 'react';
// TODO: IMG NOT WORKING
class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <img src="../components/blackhole.jpg" alt="" />
        <h1>TItem: {this.props.name}</h1>

        {this.props.isNeeded ? <button type="button">Share</button> : <button type="button" disabled>Share</button> }
        <button type="button" onClick={alert('Asd')}>Trash</button>
      </div>
    );
  }
}
export default CartItem;
