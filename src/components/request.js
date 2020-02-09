import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';
import WishItem from './WishItem';
import * as db from '../services/datastore';
import 'toastr/build/toastr.min.css';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needed: new Map(),
    };
  }

  componentDidMount() {
    db.fetchNeeded((needed) => {
      console.log('mounting');
      if (needed) {
        const myMap = new Map();
        let acountReceived = 0;
        for (const key of Object.keys(needed)) {
          const needItem = needed[key];
          if (needItem.didReceive === true) {
            acountReceived += 1;
          }
          myMap.set(key, needItem);
        }
        // this.setState({ needed: myMap });
        this.setState((prevState) => {
          const prevMap = prevState.needed;
          let pcountReceived = 0;
          prevMap.forEach((key) => {
            if (key.didReceive === true) {
              pcountReceived += 1;
            }
          });
          console.log(acountReceived, pcountReceived);
          if (acountReceived > pcountReceived && pcountReceived !== 0) {
            toastr.options = {
              positionClass: 'toast-top-right',
              hideDuration: 300,
              timeOut: 6000,
            };
            toastr.clear();
            setTimeout(() => toastr.success('Item RECEIVED!!'));
          }
          return { needed: myMap };
        });
      }
    });
  }

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

const mapStateToProps = reduxState => (
  {
    results: reduxState.results,
  }
);

export default withRouter(connect(mapStateToProps, {})(Request));
