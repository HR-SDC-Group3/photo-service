import React from 'react';

const Modal = (props) => {

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
  }

  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
  }

  const footerStyle = {
    position: 'absolute',
    bottom: 20,
  }

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <div style={footerStyle}>
          <button>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;