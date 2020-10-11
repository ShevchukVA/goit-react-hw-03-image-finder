import React from 'react';
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

export default ImageGallery;
