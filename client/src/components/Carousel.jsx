import React from 'react';
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

  getPhotos(id) {
    axios.get(`http://localhost:3003/api/restaurants/${id}/photos`)
      .then((response) => {
        console.log(response);
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
    const id = window.location.pathname.split('/')[2];
    this.getPhotos(id);
  }

  render() {
    return (
      <div>
        <RestaurantPhotos photos={this.state.restaurantPhotos} isLoading={this.state.isLoading} />
      </div>
    )
  }
}

export default Carousel;
