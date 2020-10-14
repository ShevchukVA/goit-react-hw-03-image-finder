import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const ImageGalleryItem = ({ name, urlToImg, urlToLargeImg, onUpdateImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={urlToImg}
        alt={name}
        className="ImageGalleryItem-image"
        onClick={() => onUpdateImg(urlToLargeImg)}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  name: 'picture',
  urlToImg:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  urlToLargeImg:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

ImageGalleryItem.propTypes = {
  name: PropTypes.string,
  urlToImg: PropTypes.string,
  urlToLargeImg: PropTypes.string,
  onUpdateImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
