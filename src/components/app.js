/* eslint-disable import/no-duplicates */
// change require to es6 import style
// import $ from 'jquery';
import '../style.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import Cart from './cart';
import Welcome from './welcome';
import Request from './request';
import LandingPage from './landingPage';


const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Nav = (props) => {
  return (
    <div>
      {props.page === 'Landing' ? <div /> : (
        <nav>
          <ul>
            {props.page === 'shop' ? (
              <div>
                <li><NavLink to="/shop" exact>Shop</NavLink></li>
                <li><NavLink to="/cart" exact>Cart</NavLink></li>
              </div>
            ) : <li><NavLink to="/request">Request</NavLink></li>}


            {/* <li><NavLink to="/test/id1">test id1</NavLink></li> */}
            {/* <li><NavLink to="/test/id2">test id2</NavLink></li> */}
          </ul>
        </nav>
      )}

    </div>

  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Landing',
    };
    this.chooseLandingPage = this.chooseLandingPage.bind(this);
  }

  chooseLandingPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <Router>
        <div>
          {/* <li onClick={() => this.setState({ page: 'Shop' })}><NavLink to="/shop" exact>Shop</NavLink></li> */}
          {/* <li onClick={() => this.setState({ page: 'Request' })}><NavLink to="/request" exact>Request</NavLink></li> */}
          <Nav page={this.state.page} />
          <Switch>
            <Route exact path="/" render={props => <LandingPage {...props} chooseLandingPage={this.chooseLandingPage} />} />
            <Route exact path="/shop" component={Welcome} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/request" component={Request} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    );
  }
}
