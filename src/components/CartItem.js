import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// TODO: IMG NOT WORKING
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buy: 0,
      share: 0,
    };
  }

  render() {
    return (
      <div className="cart-item">
        <img src="../components/blackhole.jpg" alt="" />
        <p>Item: {this.props.name}</p>

        <TextField id="buy" value={this.state.buy} onChange={e => this.setState({ buy: e.target.value }, () => console.log(this.state.buy))} />
        <Button>Buy</Button>

        <TextField id="share" value={this.state.share} onChange={e => this.setState({ share: e.target.value }, () => console.log(this.state.share))} />
        <Button>Share</Button>

        <button type="button">Trash</button>
      </div>
    );
  }
}
export default CartItem;
