import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onImageClick={() => onImageClick(largeImageURL, tags)}
          />
        );
      })}
    </div>
  );
};
