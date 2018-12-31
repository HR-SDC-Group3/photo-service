import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root')

const backgroundStyle = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
}

const modalStyle = {
  padding: 20,
  background: '#fff',
  borderRadius: '2px',
  display: 'inline-block',
  minHeight: '500px',
  margin: '1rem',
  postion: 'relative',
  minWidth: '700px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16) 0 3px 6px rgba(0,0,0,0.23)',
  justifySelf: 'center',
}

const imageStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
}


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
    const { onClose, modalImage } = this.props;
    console.log(this.props.modalImage);

    return ReactDOM.createPortal(
      <div style={backgroundStyle}>
        <div style={modalStyle}>
          <img src={modalImage} style={imageStyle}></img>
          <button onClick={onClose}>Close</button>
        </div>
      </div>,
      this.el
    )
  }
}

export default Modal;