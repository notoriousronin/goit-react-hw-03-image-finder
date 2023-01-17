import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: null,
    loading: false,
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const newQuery = this.state.searchQuery;
    if (prevQuery !== newQuery) {
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=1&key=30111750-62c4a73e1cd4f265a4d4cd285&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`There is no ${newQuery}`));
        })
        .then(res => this.setState({ searchQuery: res }))
        .catch(error => this.setState({ error }));
    }
  }

  handleFormNameSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery, error } = this.state;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        <Searchbar onSubmit={this.handleFormNameSubmit} />
        {searchQuery && <div>Hello</div>}
      </div>
    );
  }
}
