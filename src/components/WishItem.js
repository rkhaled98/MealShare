import React, { Component } from 'react';
<<<<<<< HEAD
import firebase from 'firebase';

=======
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
>>>>>>> ff1e16fa8fce90e7acc51b10b9e48ca9223995ce
// TODO: IMG NOT WORKING
class WishItem extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
=======
    this.state = {
      wish: 0, // How many of the item the person wants to wish
    };
  }

  removeItem() {
    this.setState({ wish: 0 });
>>>>>>> ff1e16fa8fce90e7acc51b10b9e48ca9223995ce
  }

  render() {
    return (
      <div className="wish-item">
<<<<<<< HEAD
        Item: {this.props.name}
        <button type="button" onClick={() => this.addWish(this.props.sku, this.props.name)}>Request</button>
        {/* {this.props.isNeeded ? <button type="button">Request</button> : <button type="button" disabled>Request</button> } */}
        <button type="button">Trash</button>
=======
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <TextField id="wish" value={this.state.wish} onChange={e => this.setState({ wish: e.target.value }, () => console.log(this.state.wish))} />
        <Button id="wish">Wish</Button>

        <Button id="remove" onClick={this.removeItem}>Remove from Wishlist</Button>
>>>>>>> ff1e16fa8fce90e7acc51b10b9e48ca9223995ce
      </div>
    );
  }
}
export default WishItem;
