import React from 'react';

const Mosaic = (props) => {
  const { photos, openModal } = props;

  return photos.map((restaurant) => {
    const photosToBeDisplayed = restaurant.userPhotos.slice(0, 10);
    return photosToBeDisplayed.map((photo, index) => {
      return (
        <div>
          <li><img src={photo.photoThumbnail} key={index} onClick={openModal}></img></li>
        </div>
      )
    })
  })
}

export default Mosaic;