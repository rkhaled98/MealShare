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
    return (
      <div>
        <Search />
        {console.log(this.state.cart)}
        {this.props.results.map(result => <WishItem name={result.name} sku={result.sku} />)}
        {/* {this.props.results === {} ? null : this.props.results.map(result => <SearchItem name={result.name} />)} */}
        {/* {this.renderSearchItems(this.props.results)} */}
      </div>
    //   <div>
    //     {this.props.name}
    //     <button className="items" type="button" onClick="this.addCartItem">
    //                 Add to Cart
    //     </button>
    //   </div>
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
