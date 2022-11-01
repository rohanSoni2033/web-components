import React from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

const Overlay = props => {
  return ReactDOM.createPortal(
    <div className='overlay' onClick={props.onOverlayClick}>
      {props.children}
    </div>,
    document.getElementById('overlay-root')
  );
};
export default Overlay;
