import React, { Component } from 'react';
import firebase from 'firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// TODO: IMG NOT WORKING
class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: 0, // How many of the item the person wants to wish
    };
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

  removeItem() {
    this.setState({ wish: 0 });
  }

  render() {
    return (
      <div className="wish-item">
        {/* {this.props.isNeeded ? <button type="button">Request</button> : <button type="button" disabled>Request</button> } */}
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <TextField id="wishTF" value={this.state.wish} onChange={e => this.setState({ wish: e.target.value }, () => console.log(this.state.wish))} />
        <Button id="wish" onClick={() => this.addWish(this.props.sku, this.props.name)}>Wish</Button>
        <Button id="remove" onClick={this.removeItem}>Remove from Wishlist</Button>
      </div>
    );
  }
}
export default WishItem;
