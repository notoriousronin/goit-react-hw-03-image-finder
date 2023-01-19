import React from 'react';

export default function ImageGalleryItem({ webformatURL, tags, onImageClick }) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={onImageClick} />
    </li>
  );
}
