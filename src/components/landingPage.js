/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';

// import * as db from '../services/datastore';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={() => {
            this.props.chooseLandingPage('shop');
            this.props.history.push('/shop');
          }

        }
          ><NavLink to="/shop" exact>Shop</NavLink>
          </li>
          <li onClick={() => {
            this.props.chooseLandingPage('request');
            this.props.history.push('/request');
          }}
          ><NavLink to="/request" exact>Request</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default LandingPage;
