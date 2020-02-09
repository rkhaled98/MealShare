/* eslint-disable class-methods-use-this */
import React from 'react';
import firebase from 'firebase';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import * as db from '../services/datastore';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  onClick = () => {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 3000,
    };
    toastr.clear();
    setTimeout(() => toastr.success('Item Added'));
  }

  addCart(sku, name) {
    const newKey = firebase.database().ref('cart').push().key;
    const newCartItem = {
      sku,
      name,
      id: newKey,
    };
    const updates = {};
    updates[`cart/${newKey}`] = newCartItem;
    firebase.database().ref().update(updates);
    this.onClick();
  }

  render() {
    return (
      <div>
        {this.props.name}
        <button className="items" type="button" onClick={() => this.addCart(this.props.sku, this.props.name)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default SearchItem;
