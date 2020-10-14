import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Button = ({ onUpdateButton }) => {
  return (
    <button type="button" className="Button" onClick={onUpdateButton}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onUpdateButton: PropTypes.func.isRequired,
};

export default Button;
