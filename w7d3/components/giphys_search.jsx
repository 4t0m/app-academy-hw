import React, { Component } from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends Component {

  constructor() {
    super();
    this.state = { query: "birthday party" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys("birthday+party");
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.state.query.split(" ").join("+");
    this.props.fetchSearchGiphys(query);
  }

  render() {
    let { giphys } = this.props;

    return (
      <div>
        <form className='search-bar'>
          <input value={this.state.query} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
