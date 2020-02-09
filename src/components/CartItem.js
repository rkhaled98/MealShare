/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
// TODO: IMG NOT WORKING
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      share: 0, // How many of the item will be shared
    };
  }

  handleRemove(itemId) {
    firebase.database().ref('cart').child(itemId).remove();
  }

  render() {
    return (
      <div className="cart-item">
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <TextField id="share" value={this.state.share} onChange={e => this.setState({ share: e.target.value }, () => console.log(this.state.share))} />
        <Button id="share" disabled={this.state.share === 0}>Share</Button>

        <Button id="remove" onClick={this.removeItem}>Remove from Cart</Button>

        <p>{this.state.wished} of this item is wished</p>
      </div>
    );
  }
}
export default CartItem;
