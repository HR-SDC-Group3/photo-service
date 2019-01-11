import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  horizontalOrder: false,
}

class Mosaic extends React.Component {
  render() {
    const { photoArray, onClick } = this.props;

    const images = photoArray.map(photos => {
      const photosToBeDisplayed = photos.userPhotos.slice(0, 8);
      return photosToBeDisplayed.map((photo, index) => {
        return (
          <li id="carousel-tile" key={index}>
            <img src={photo.photoURL} key={index} data-id={index} onClick={onClick} className="carousel-image"></img>
          </li>
        )
      });
    });

    return (
      <Masonry options={masonryOptions}>
        {images}
      </ Masonry>
    )
  }
}

export default Mosaic;