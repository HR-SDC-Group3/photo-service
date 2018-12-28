import React from 'react';

const Modal = (props) => {

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundColor: '#f7f7f7',
    padding: 50,
  }
  const imageStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 400,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
  }

  const footerStyle = {
    position: 'absolute',
    margin: '0 auto',
  }


  return (
    props.userPhotos.map((userPhoto) => {
      return (
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <button onClick={props.onClick}>Close</button>
            <img src={userPhoto.photoURL} style={imageStyle} id="carousel-modal"></img>
            <div style={footerStyle}>
              <br></br>
              <div><span className="carousel-description">{userPhoto.description}</span></div>
              <div><span className="carousel-username">{userPhoto.username}</span></div>
              <div><span className="carousel-date">{userPhoto.date}</span></div>
              <a href="#">&#10094; Previous</a>
              <a href="#">Next &#10095;</a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Modal;