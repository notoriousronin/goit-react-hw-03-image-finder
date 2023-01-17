import React, { Component } from 'react';
import Notiflix from 'notiflix';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return Notiflix.Notify.info('Please, fill the search bar.');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form onSubmit={this.handleSubmit} className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.searchQuery}
              onChange={this.handleChange}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
