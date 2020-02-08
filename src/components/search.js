import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResponse: [],
    };
    this.load = this.load.bind(this);
  }

  load() {
    const ROOT_URL = `https://api.wegmans.io/products/search?query=${this.state.searchTerm}&api-version=2018-10-18&subscription-key=51b36579158244a99436d0611e6197e7`;
    axios.get(`${ROOT_URL}`).then((r) => {
      this.setState({ searchResponse: r }, () => console.log(this.state.searchResponse));
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <TextField id="time" value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value }, () => console.log(this.state.searchTerm))} />
        <Button onClick={this.load}>Search!</Button>
      </div>
    );
  }
}

export default Search;
