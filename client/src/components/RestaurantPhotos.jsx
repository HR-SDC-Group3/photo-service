import React from 'react';
import Modal from './Modal.jsx';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentModal: '',
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    const modalImage = event.target.src;

    this.setState(prevState => ({
      showModal: !prevState.showModal,
      currentModal: modalImage,
    }));

    console.log(this.state)
  }

  render() {
    console.log(this.state)
    if (this.props.isLoading) {
      return (
        <div>
          {this.props.photos.map((restaurant, index) => {
            return restaurant.userPhotos.map((photo, index) => {
              return (
                <li><img src={photo.photoURL} key={index} onClick={this.toggleModal}></img></li>
              )
            })
          })}
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default RestaurantPhotos;