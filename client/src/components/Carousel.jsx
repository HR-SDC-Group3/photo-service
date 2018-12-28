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

  componentDidMount() {
    Axios.get('/photos/restaurants/')
      .then((response) => {
        this.setState({
          restaurantPhotos: response.data,
        })
      })
      .catch((error) => {
        console.log('Error fetching data')
      })
  }

  render() {
    console.log('After component did mount', this.state.restaurantPhotos);
    return (

      <div className="carousel-container" >
        {/* <RestaurantPhotos photos={this.state.restaurantPhotos} /> */}
        <div id="one">1</div>
        <div id="two">2</div>
        <div id="three">3</div>
        <div id="four">4</div>
        <div id="five">5</div>
        <div id="six">6</div>
        <div id="seven">7</div>
        <div id="eight">8</div>
        <div id="nine">9</div>
        <div id="ten">10</div>
      </div >
    )
  }
}

export default Carousel;
