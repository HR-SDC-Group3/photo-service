import React from 'react';
import url from 'url';
import RestaurantPhotos from './RestaurantPhotos.jsx';
import axios from 'axios';
// import styled from './styles/CarouselStyles.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantPhotos: null,
      isLoading: false,
    }
    this.getPhotos = this.getPhotos.bind(this);
  }

  //USE URL PARSER TO GET URL ID
  //axios.get(`/photos/restaurants/${id}`)
  getPhotos(id) {
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
    // let url = new url(window.location.href);
    // let id = url.pathname.split('/')[2];
    this.getPhotos();
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
