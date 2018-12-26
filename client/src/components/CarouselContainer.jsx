import React from 'react';
import Axios from 'axios';
import url from 'url';
import sampleArray from './sampledata.js';
import RestaurantPhotos from './RestaurantPhotos.jsx';

class CarouselContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userPhotos: sampleArray,
      isOpen: true,
    }
    this.handleModalDisplay = this.handleModalDisplay.bind(this);
  }

  handleModalDisplay() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className="carousel-container" >
        <RestaurantPhotos photos={this.state.userPhotos} onClick={this.handleModalDisplay} show={this.state.isOpen} />
      </div>
    )
  }
}

export default CarouselContainer;