/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
// TODO: IMG NOT WORKING
class CartItem extends Component {
  handleRemove(itemId) {
    firebase.database().ref('cart').child(itemId).remove();
  }

  // handleShare(id, sku) {
  //   const updates = {};
  //   sku = updates[`notes/${noteId}/x`] = newX;
  //   firebase.database().ref().update(updates);
  // }

  render() {
    return (
      <div className="cart-item">
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <Button id="share" onClick={() => this.props.handleShare(this.props.id)}>Share</Button>

        <Button id="remove" onClick={() => this.handleRemove(this.props.id)}>Remove from Cart</Button>

        {this.props.count ? <p>This item is wished by {this.props.count} people.</p> : <p>This item is not wished by anybody.</p>}
      </div>
    );
  }
}
export default CartItem;
