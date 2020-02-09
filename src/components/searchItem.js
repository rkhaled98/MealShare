/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
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
  }

  render() {
    return (
      <div>
        <img src={require('../img/placeholder.png')} alt="" />
        {this.props.name}
        <Button className="items" variant="contained" color="primary" onClick={() => this.addCart(this.props.sku, this.props.name)}>
          Add to Cart
        </Button>
      </div>
    );
  }
}

export default SearchItem;
