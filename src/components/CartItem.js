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

        {/* <TextField id="share" value={this.state.share} onChange={e => this.setState({ share: e.target.value }, () => console.log(this.state.share))} /> */}
        <Button id="share" onClick={() => this.props.handleShare(this.props.id)}>Share</Button>

        <Button id="remove" onClick={() => this.handleRemove(this.props.id)}>Remove from Cart</Button>

        <p>{this.props.wished} of this item is wished</p>
      </div>
    );
  }
}
export default CartItem;
