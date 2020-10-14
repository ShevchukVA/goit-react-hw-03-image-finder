import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

export default class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <label>
            <input
              className="SearchForm-input"
              onChange={this.handleInput}
              value={inputValue}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </label>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
