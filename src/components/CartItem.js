import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// TODO: IMG NOT WORKING
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buy: 0, // How many of the item is in cart
      share: 0, // How many of the item will be shared
      wished: 0, // TOTAL Number of this item wished in the Database. "WishItem.js" has state "wish," which is the number of items that the person wants to wish
    };
  }

  onClick = () => {
    this.count = this.count || 1;
    toastr.options = {
      positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 60000,
    };
    toastr.clear();
    setTimeout(() => toastr.success('Test'), 300);
  }

  removeItem() {
    this.setState({ buy: 0 });
  }

  render() {
    return (
      <div className="cart-item">
        <img src="../img/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>
        <TextField id="buy" value={this.state.buy} onChange={e => this.setState({ buy: e.target.value }, () => console.log(this.state.buy))} />
        <Button id="buy">Buy</Button>

        <TextField id="share" value={this.state.share} onChange={e => this.setState({ share: e.target.value }, () => console.log(this.state.share))} />
        <Button id="share" disabled={this.state.share === 0}>Share</Button>

        <Button id="remove" onClick={this.onClick}>Remove from Cart</Button>

        <p>{this.state.wished} of this item is wished</p>
      </div>
    );
  }
}
export default CartItem;
