/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchItem from './searchItem';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{this.props.results.map(result => <SearchItem key={result.sku} name={result.name} sku={result.sku} />)}</div>
      </div>

    );
  }
}

const mapStateToProps = reduxState => (
  {
    results: reduxState.results,
  }
);

export default withRouter(connect(mapStateToProps, {})(Welcome));
