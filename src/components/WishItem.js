/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import firebase from 'firebase';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// TODO: IMG NOT WORKING
class WishItem extends Component {
  constructor(props) {
    super(props);
    this.addWish = this.addWish.bind(this);
  }

  handleRemove(itemId) {
    firebase.database().ref('needed').child(itemId).remove();
  }

  // eslint-disable-next-line class-methods-use-this
  addWish(sku, name) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 3000,
    };
    toastr.clear();
    setTimeout(() => toastr.success('Wish Added'));

    const newKey = firebase.database().ref('needed').push().key;
    const neededItem = {
      sku,
      name,
      id: newKey,
    };
    const updates = {};
    updates[`needed/${newKey}`] = neededItem;
    firebase.database().ref().update(updates);
  }

  render() {
    return (
      <div className="wish-item">
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>
        {this.props.inSearch === 1
          ? <Button id="wish" onClick={() => this.addWish(this.props.sku, this.props.name)}>Wish</Button>
          : null}

        {this.props.stillNeeded === 1
          ? <Button id="remove" onClick={() => this.handleRemove(this.props.id)}>Remove from Wishlist</Button>
          : null}
      </div>
    );
  }
}
export default WishItem;
