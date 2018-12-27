import React from 'react';
import Modal from './Modal.jsx';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    { console.log(this.props.photos, 'Props being passed to Modal') }
    if (this.state.showModal === false) {
      return this.props.photos.map((card, index) => {
        if (index < 6) {
          return (
            <li><span className="carousel-card"><img src={card.photoURL} key={index} onClick={this.toggleModal}></img></span></li>
          )
        }
      })
    }
    return <Modal userPhotos={this.props.photos} />
  }
};

export default RestaurantPhotos;
