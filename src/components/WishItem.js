import React, { Component } from 'react';
// TODO: IMG NOT WORKING
class WishItem extends Component {
  render() {
    return (
      <div className="wish-item">
        <img src="../components/blackhole.jpg" alt="" />
        <h1>Item: {this.props.name}</h1>

        {this.props.isNeeded ? <button type="button">Request</button> : <button type="button" disabled>Request</button> }
        <button type="button">Trash</button>
      </div>
    );
  }
}
export default WishItem;
