import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root')

// const backgroundStyle = {
//   position: 'absolute',
//   top: '0',
//   bottom: '0',
//   left: '0',
//   right: '0',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'rgba(0,0,0,0.3)',
// }

// const modalStyle = {
//   padding: 10,
//   background: '#fff',
//   borderRadius: '2px',
//   display: 'inline-block',
//   minHeight: '500px',
//   margin: '1rem',
//   position: 'relative',
//   minWidth: '700px',
//   boxShadow: '0 3px 6px rgba(0,0,0,0.16) 0 3px 6px rgba(0,0,0,0.23)',
//   justifySelf: 'center',
//   overflowY: 'hidden',
// }

// const imageStyle = {
//   marginLeft: 'auto',
//   marginRight: 'auto',
// }


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  el = document.createElement('div')

  //Adds the portal 
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { modalImage, onClose, photos } = this.props;

    return ReactDOM.createPortal(
      <div id="carousel-modal-bg">
        <div id="carousel-modal-style">
          {photos.map((restaurant) => {
            return restaurant.userPhotos.map((photo, index) => {
              const parsedDate = photo.date.split(' ').slice(0, 4).join(' ');
              return (
                // Need to pass in the index of the modalImage that was clicked on here. 
                // From there, we load the array and set the pointer to that image that was clicked on
                // Left button and right button can scroll through the photos
                <div id="modal-scroller">
                  <div id="carousel-modal"><img src={photo.photoURL} key={index}></img></div>
                  <div id="carousel-description">{photo.photo_description}</div>
                  <div id="carousel-date">{parsedDate}</div>
                  <div id="carousel-user">{photo.username}</div>
                  <button onClick={onClose}>Close</button>
                </div>
              )
            })
          })}
        </div>
      </div>,
      this.el
    )
  }
}

export default Modal;