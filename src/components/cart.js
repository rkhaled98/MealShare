import React from 'react';
import * as db from '../services/datastore';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: new Map(),
      wished: new Map(),
      displayCart: [],
    };
  }

  // this.renderSearchItems = this.renderSearchItems.bind(this);
  componentDidMount() {
    db.fetchCart((cart) => {
      const myMap = new Map();
      for (const key of Object.keys(cart)) {
        const cartItem = cart[key];
        myMap.set(key, cartItem);
      }
      this.setState({ cart: myMap }, () => {
        db.fetchNeeded((wished) => {
          console.log(wished);
          const myMap2 = new Map();
          for (const key of Object.keys(wished)) {
            const wishedItem = wished[key];
            myMap2.set(key, wishedItem);
          }
          console.log(myMap2);
          this.setState({ wished: myMap2 }, () => {
            const out = [];
            this.state.cart.forEach((cartItem) => {
              console.log(cartItem);
              console.log(this.state.wished);
              let count = 0;
              this.state.wished.forEach((wishItem) => {
                console.log(cartItem);
                console.log(wishItem);
                if (cartItem.sku === wishItem.sku) {
                  count += 1;
                }
              });
              out.push({
                sku: cartItem.sku, count, name: cartItem.name, id: cartItem.id,
              });
            });
            this.setState({ displayCart: out });
          });
        });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>CART</h1>
        {/* need to create cart items out of the display cart array */}
        {console.log(this.state.displayCart)}
        {this.state.displayCart.map(item => <CartItem name={item.name} id={item.id} />)}
        {/* {this.state.displayCart} */}
        <button type="button">
          Checkout Cart
        </button>
      </div>
    );
  }
}

export default Cart;
