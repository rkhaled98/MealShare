import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import firebase from 'firebase';
import Search from './search';
import SearchItem from './searchItem';
import * as db from '../services/datastore';
// import Cart from './cart';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: new Map(),
    };
    // this.renderSearchItems = this.renderSearchItems.bind(this);
  }

  componentDidMount() {
    db.fetchCart((cart) => {
      const myMap = new Map();
      for (const key of Object.keys(cart)) {
        const cartItem = cart[key];
        myMap.set(key, cartItem);
      }
      this.setState({ cart: myMap }, () => console.log(this.state.cart));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  //   renderSearchItems(results) {
  //     return (
  //       <div>
  //           this.props.res
  //       </div>
  //     );
  //     console.log(results);
  //   }
  // TEST
  render() {
    return (
      <div>
        <Search />
        {console.log(this.state.cart)}
        {this.props.results.map(result => <SearchItem key={result.sku} name={result.name} sku={result.sku} />)}
        {/* <Cart items={items} /> */}
        {/* {this.props.results === {} ? null : this.props.results.map(result => <SearchItem name={result.name} />)} */}
        {/* {this.renderSearchItems(this.props.results)} */}
      </div>

    );
  }
}

// const Welcome = (props) => {
//     return (
//         <div>Welcome
//       <Search />
//             <Counter />
//             <Controls />
//             <SearchItem name="NAME" />
//         </div>
//     );
// };

const mapStateToProps = reduxState => (
  {
    results: reduxState.results,
  }
);

export default withRouter(connect(mapStateToProps, {})(Welcome));
