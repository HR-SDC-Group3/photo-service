import React from 'react';
import Modal from './Modal.jsx';
import _ from 'lodash';
import Mosaic from './Mosaic.jsx';
import Header from './Header.jsx';

/*
------------------------------------- TO-DO ----------------------------------------------------
OpenTable restaurants seem to be making a photo carousel of either 1 restaurant entry
or 10. Therefore, photo entries must be either 1 or 10, to be displayed to the user
Need to conditionally render 1 or 10 photos, depending on what was calculated in the beginning. 
Keep it static on componentDidMount, and don't change the state
------------------------------------------------------------------------------------------------

*/

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      restaurantHeader: null,
      currentModal: '',
      currentModalIndex: 0,
      headerStyleToDisplay: [0, 10],
    }
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.generateHeaderView = this.generateHeaderView.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  //Generates a fixed view based off of the number that was calculated
  componentDidMount() {
    const { headerStyleToDisplay } = this.state
    this.setState({ restaurantHeader: headerStyleToDisplay[this.generateHeaderView()] })
  }

  openModal() {
    // let modalImage = event.target.src;
    // modalImage = modalImage.replace('thumbnails', 'large_photos');
    // modalImage = modalImage.replace('_small', '_large');

    // const modalIndex = event.target.dataset.id;
    // console.log(modalIndex);

    this.setState({
      showModal: true,
      // currentModal: modalImage,
      // currentModalIndex: modalIndex,
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
      // currentModal: '',
      // currentModalIndex: 0,
    })
  }

  generateHeaderView() {
    return Math.round(Math.random());
  }

  previous() {
    const { currentModalIndex } = this.state;
    const { photos } = this.props;

    if (currentModalIndex !== 0) {
      this.setState({ currentModalIndex: this.state.currentModalIndex -= 1 })
    } else {
      this.setState({ currentModalIndex: photos.length - 1 })
    }
  }

  next() {
    const { currentModalIndex } = this.state;
    const { photos } = this.props;

    if (currentModalIndex !== photos.length) {
      this.setState({ currentModalIndex: this.state.currentModalIndex += 1 })
    } else {
      this.setState({ currentModalIndex: 0 })
    }
  }

  render() {

    const { photos, isLoading } = this.props
    const { showModal, currentModal, currentModalIndex } = this.state

    if (isLoading) {
      return (
        <div>
          <Header />
          <Mosaic photoArray={photos} onClick={this.openModal} />
          <div>
            {showModal ? <Modal onClose={this.closeModal}
              modalImage={currentModal}
              photos={photos}
              currentModalIndex={currentModalIndex}
              onPrevious={this.previous}
              onNext={this.next} /> : null}
          </div>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}


export default RestaurantPhotos;
