import React, { Component } from 'react';
import firebase from 'firebase';

// TODO: IMG NOT WORKING
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
        Item: {this.props.name}
        <button type="button" onClick={() => this.addWish(this.props.sku, this.props.name)}>Request</button>
        {/* {this.props.isNeeded ? <button type="button">Request</button> : <button type="button" disabled>Request</button> } */}
        <button type="button">Trash</button>
      </div>
    );
  }
}
export default WishItem;
