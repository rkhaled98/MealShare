import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import config from '../config.json';
import { loadSearch, loadSearchTerm } from '../actions';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Banana',
    };
    this.load = this.load.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });

    // , () => this.props.loadSearchTerm(e.target.value));
  }

  load() {
    const ROOT_URL = `https://api.wegmans.io/products/search?query=${this.state.searchTerm}&api-version=2018-10-18&subscription-key=51b36579158244a99436d0611e6197e7`;
    axios.get(`${ROOT_URL}`).then((r) => {
      console.log(r);
      this.props.loadSearch(r.data.results.slice(0, 10));
      this.props.termChange(this.state.searchTerm);
      //

      //   this.setState({ searchResponse: r }, () => this.props.loadSearch());
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <TextField id="time" value={this.state.searchTerm} onChange={e => this.handleChange(e)} />
        <Button onClick={this.load}>Search!</Button>
      </div>
    );
  }
}


export default (connect(null, { loadSearch, loadSearchTerm })(Search));
