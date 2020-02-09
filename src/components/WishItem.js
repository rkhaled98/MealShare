/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';

class WishItem extends Component {
  constructor(props) {
    super(props);
    this.addWish = this.addWish.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  addWish(sku, name) {
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
        <img src={require('../img/placeholder.png')} alt="" />
        {this.props.name}
        {this.props.inSearch === 1
          ? <Button id="wish" variant="contained" color="primary" onClick={() => this.addWish(this.props.sku, this.props.name)}>Wish</Button>
          : null}

        {this.props.stillNeeded === 1
          ? <Button id="remove" variant="contained" onClick={() => this.handleRemove(this.props.id)}>Remove from Wishlist</Button>
          : null}
      </div>
    );
  }
}
export default WishItem;
