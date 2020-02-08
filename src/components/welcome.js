import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
import SearchItem from './searchItem';
import CartItem from './CartItem';

class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.renderSearchItems = this.renderSearchItems.bind(this);
//   }

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
        <CartItem />
        <Search />
        {this.props.results.map(result => <SearchItem name={result.name} />)}
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

export default withRouter(connect(mapStateToProps, { })(Welcome));
