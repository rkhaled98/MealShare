/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import '../style.scss';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

class CartItem extends Component {
  handleRemove(itemId) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 6000,
    };
    toastr.clear();
    setTimeout(() => toastr.warning('Remove from Cart'));
    firebase.database().ref('cart').child(itemId).remove();
  }

  // handleShare(id, sku) {
  //   const updates = {};
  //   sku = updates[`notes/${noteId}/x`] = newX;
  //   firebase.database().ref().update(updates);
  // }

  render() {
    return (
      <div className="cart-item" id="parent">
        <div id="image">
          <img src={require('../img/placeholder.png')} alt="" />
        </div>

        <div id="text">
          {this.props.name}
          {this.props.count ? <p>This item is wished by {this.props.count} people.</p> : <p>This item is not wished by anybody.</p>}
        </div>

        <div id="buttons">
          <Button id="share" variant="contained" color="primary" onClick={() => this.props.handleShare(this.props.id)}>Share</Button>

          <Button id="remove" variant="contained" onClick={() => this.handleRemove(this.props.id)}>Remove from Cart</Button>
        </div>

      </div>
    );
  }
}
export default CartItem;
