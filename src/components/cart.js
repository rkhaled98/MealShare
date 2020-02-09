import React from 'react';


class Cart extends React.Component {
  render() {
    return (
      <div>
        {this.props.items}
        <button type="button">
          Checkout Cart
        </button>
      </div>
    );
  }
}

export default Cart;
