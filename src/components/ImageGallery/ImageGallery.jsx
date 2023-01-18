import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onSelect }) {
  return (
    <div>
      {images.length > 0 && (
        <ul>
          {images.map(image => {
            return (
              <li key={image.id}>
                <ImageGalleryItem image={image} onSelect={onSelect} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
