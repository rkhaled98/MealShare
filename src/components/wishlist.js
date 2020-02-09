import React from 'react';


class Wishlist extends React.Component {
  render() {
    return (
      <div>
        {this.props.items}
        <button type="button">
          Wishlist Cart
        </button>
      </div>
    );
  }
}

export default Wishlist;
