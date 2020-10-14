import React from 'react';
import PropTypes from 'prop-types';

const Notification = message => {
  return <div>{message}</div>;
};

Notification.defaultProps = {
  massage: 'Whoops, something went wrong',
};

Notification.propTypes = {
  massage: PropTypes.string,
};

export default Notification;
