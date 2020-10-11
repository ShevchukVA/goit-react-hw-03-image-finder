import React from 'react';
import '../styles.css';

const ImageGallaryItem = ({ name, urlToImg, urlToLargeImg, onUpdateImg }) => {
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

export default ImageGallaryItem;
