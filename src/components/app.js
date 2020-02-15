import '../style.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import Cart from './cart';
import Welcome from './welcome';
import Request from './request';
import Search from './search';

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <img style={{
          height: '60px', width: '60px', marginRight: 'auto',
        }}
          src="Free_Sample_By_Wix.png"
          hspace="10px"
          alt=" "
        />
        <div className="searcher"><Search /></div>
        <li><NavLink to="/" exact>Shop</NavLink></li>
        <li><NavLink to="/cart" exact>Cart</NavLink></li>
        <li><NavLink to="/request">Request</NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
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
