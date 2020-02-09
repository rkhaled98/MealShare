// change require to es6 import style
// import $ from 'jquery';
import '../style.scss';

// const mainDiv = $('#main');
// let num = 0;

// setInterval(() => {
//   num += 1;
//   mainDiv.text(`You've been on this page for ${num} seconds`);
// }, 1000);


import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
// import SearchItem from './searchItem';
import Cart from './cart';
import Welcome from './welcome';
import Request from './request';
// import Search from './search';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
// import CartItem from './CartItem';
// import SearchItem from './searchItem';
// import Search from './search';

// const About = (props) => {
//   return (
//     <div> All there is to know about me
//     </div>
//   );
// };
// const Welcome = (props) => {
//   return (
//     <div>Welcome
//       <Search />
//       <Counter />
//       <Controls />
//       <SearchItem name="NAME" />
//     </div>
//   );
// };
// const Welcome = (props) => {
//   return (
//     <div>Welcome
//       <Search />
//       <Counter />
//       <Controls />
//       <CartItem name="Banana" img="../img/blackhole.jpg" isNeeded={false} />
//       <SearchItem name="NAME" />
//     </div>
//   );
// };

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Shop</NavLink></li>
        <li><NavLink to="/cart" exact>Cart</NavLink></li>
        <li><NavLink to="/request">Request</NavLink></li>
        {/* <li><NavLink to="/test/id1">test id1</NavLink></li> */}
        {/* <li><NavLink to="/test/id2">test id2</NavLink></li> */}
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

export default class App extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
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
// export default const App = (props) => {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/about" component={About} />
//           <Route exact path="/test/:id" component={Test} />
//           <Route component={FallBack} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('main'));

// export default App;
