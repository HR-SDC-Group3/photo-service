import React from 'react';
import Modal from './Modal.jsx';
import _ from 'lodash';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentModal: '',
      headerStyleToDisplay: [0, 10],
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.generateHeaderView = this.generateHeaderView.bind(this);
    this.generateRandomIndex = this.generateRandomIndex.bind(this);
  }

  // toggleModal should bring up a modal window with the Modal that was clicked on being the 
  // centerpiece

  openModal(event) {
    let modalImage = event.target.src;
    modalImage = modalImage.replace('thumbnails', 'large_photos');
    modalImage = modalImage.replace('_small', '_large');

    this.setState(prevState => ({
      showModal: true,
      currentModal: modalImage
    }))
  }

  closeModal() {
    this.setState(prevState => ({
      showModal: false
    }))
  }

  generateHeaderView() {
    return Math.round(Math.random());
  }

  generateRandomIndex() {
    return Math.round(Math.random() * 22 + 1)
  }

  render() {
    // OpenTable restaurants seem to be making a photo carousel of either 1 restaurant entry
    // or 10. Therefore, photo entries must be either 1 or 10, to be displayed to the user 

    const { photos, isLoading } = this.props
    const { showModal, currentModal, amountToRender, headerStyleToDisplay } = this.state

    if ((isLoading) && (headerStyleToDisplay[this.generateHeaderView()] === 10)) {
      return (
        <div>
          {photos.map((restaurant, index) => {
            const photosToBeDisplayed = restaurant.userPhotos.slice(0, 10);
            return photosToBeDisplayed.map((photo, index) => {
              return (
                <li><img src={photo.photoThumbnail} key={index} onClick={this.openModal}></img></li>
              )
            })
          })}
          {this.state.showModal ? <Modal onClose={this.closeModal} modalImage={this.state.currentModal} /> : null}
        </div>
      )
    } else if ((isLoading) && (headerStyleToDisplay[this.generateHeaderView()] === 0)) {
      return (
        <div>
          {photos.map((restaurant, index) => {
            const headerToDisplay = _.find(restaurant.userPhotos, (userPhotos) => { return userPhotos[index] = this.generateRandomIndex() })
            console.log(headerToDisplay)
            return <img src={headerToDisplay.photoURL} id="carousel-header"></img>
          })
          }
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default RestaurantPhotos;