import React from 'react';

export default function ImageGalleryItem({
  image: { name, webformatURL, largeImageURL },
  onSelect,
}) {
  return (
    <img
      src={webformatURL}
      alt={name}
      onClick={() => {
        onSelect(largeImageURL);
      }}
    />
  );
}
