import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// TODO: IMG NOT WORKING
class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: 0, // How many of the item the person wants to wish
    };
  }

  removeItem() {
    this.setState({ wish: 0 });
  }

  render() {
    return (
      <div className="wish-item">
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <TextField id="wish" value={this.state.wish} onChange={e => this.setState({ wish: e.target.value }, () => console.log(this.state.wish))} />
        <Button id="wish">Wish</Button>

        <Button id="remove" onClick={this.removeItem}>Remove from Wishlist</Button>
      </div>
    );
  }
}
export default WishItem;
