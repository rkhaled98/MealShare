import React from 'react';


class RequestedItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        <button className="items" type="button" onClick="this.addCartItem">
          Add to Cart
        </button>
      </div>
    );
  }
}

export default RequestedItem;
