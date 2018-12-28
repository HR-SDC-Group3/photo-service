import React from 'react';
import url from 'url';
import RestaurantPhotos from './RestaurantPhotos.jsx';
import Axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="carousel-container" >
        <RestaurantPhotos />
      </div >
    )
  }
}

export default Carousel;
