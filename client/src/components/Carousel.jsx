import React from 'react';
import url from 'url';
import RestaurantPhotos from './RestaurantPhotos.jsx';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantPhotos: null,
      isLoading: false,
    }
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    axios.get(`/photos/restaurants/`)
      .then((response) => {
        this.setState((currentState) => {
          return {
            restaurantPhotos: response.data,
            isLoading: !currentState.isLoading
          }
        })
      })
      .catch((error) => {
        console.log('Error fetching data');
      })
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <div className="carousel-container" >
        <RestaurantPhotos photos={this.state.restaurantPhotos} isLoading={this.state.isLoading} />
      </div >
    )
  }
}

export default Carousel;
