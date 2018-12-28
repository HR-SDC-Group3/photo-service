import React from 'react';
import Axios from 'axios';
import Modal from './Modal.jsx';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      restaurantPhotos: [],
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
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
    const { restaurantPhotos } = this.state

    if (restaurantPhotos) {
      return <div>Loading...</div>
    }

    return restaurantPhotos.userPhotos.map((card, index) => {
      return (
        <div>
          <li><img src={card.photoThumbnail} key={index} onClick={this.toggleModal}></img></li>
        </div>
      )
    })
  }
};

export default RestaurantPhotos;