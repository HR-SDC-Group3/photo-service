import React from 'react';
import Axios from 'axios';
import url from 'url';
import RestaurantPhotos from './RestaurantPhotos.jsx';
import sampleArray from './sampledata.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantPhotos: sampleArray,
    }
  }

  render() {
    return (
      <div className="carousel-container" >
        <div className="carousel-image-container">
          <RestaurantPhotos photos={this.state.restaurantPhotos} />
        </div>
      </div >
    )
  }
}

export default Carousel;
