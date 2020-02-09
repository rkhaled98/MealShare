import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import firebase from 'firebase';
import Search from './search';
import WishItem from './WishItem';
import * as db from '../services/datastore';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needed: new Map(),
    };
    // this.renderSearchItems = this.renderSearchItems.bind(this);
  }

  componentDidMount() {
    db.fetchNeeded((needed) => {
      if (needed) {
        const myMap = new Map();
        for (const key of Object.keys(needed)) {
          const needItem = needed[key];
          myMap.set(key, needItem);
        }
        this.setState({ needed: myMap }, () => console.log(this.state.needed));
      }
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

  render() {
    const stillNeeded = [];
    const received = [];
    this.state.needed.forEach((wishItem) => {
      if (wishItem.didReceive === true) {
        received.push(wishItem);
      } else {
        stillNeeded.push(wishItem);
      }
    });


    return (
      <div>
        <div>
          <Search />
          {console.log(this.state.cart)}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{this.props.results.map(result => <WishItem name={result.name} sku={result.sku} inSearch={1} />)}</div>
        </div>

        <h1>Wish List</h1>
        {console.log(this.state.wishlist)}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{stillNeeded.map(item => <WishItem name={item.name} sku={item.sku} id={item.id} stillNeeded={1} />)}</div>
        <div> <h1>Received</h1> </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{received.map(item => <WishItem name={item.name} sku={item.sku} />)}</div>
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

export default withRouter(connect(mapStateToProps, {})(Request));
