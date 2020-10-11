import React from 'react';
import '../styles.css';

const Button = ({ onUpdateButton }) => {
  return (
    <button type="button" className="Button" onClick={onUpdateButton}>
      Load more
    </button>
  );
};

export default Button;
