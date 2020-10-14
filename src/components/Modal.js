import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div
        className="Overlay"
        onClick={event => {
          if (event.target === event.currentTarget) {
            this.props.onCloseModal();
          }
        }}
      >
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
