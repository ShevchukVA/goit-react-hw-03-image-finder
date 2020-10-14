import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';

const ImageGallery = ({ images, onUpdateImages }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          name={tags}
          urlToImg={webformatURL}
          urlToLargeImg={largeImageURL}
          onUpdateImg={onUpdateImages}
        />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  tags: 'picture',
  webformatURL:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  largeImageURL:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ).isRequired,
  onUpdateImages: PropTypes.func.isRequired,
};

export default ImageGallery;
