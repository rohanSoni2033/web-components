import React, { useState } from 'react';
import Overlay from './Overlay';
import { Button } from './Button';

/**
 * @render
 * const ModalContent = () => {
 *    return <p>this is a modal content</p>
 * }
 *
 * <Modal
 * modalTitle={'this is an example modal'}
 * modalContent={<ModalContent/>}
 * displayModal={true || false}
 * />
 * */

const Modal = props => {
  const [isModalOpen, setIsModalOpen] = useState(props.openModal);

  const closeOverlayHandler = event => {
    if (!event.target.closest('.modal')) setIsModalOpen(false);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return isModalOpen ? (
    <Overlay onOverlayClick={closeOverlayHandler}>
      <div className='modal'>
        <div className='modal-header'>
          <p>{props.modalTitle}</p>
          <Button onButtonClick={closeModalHandler} />
        </div>
        <div className='modal-content'>{props.modelContent}</div>
      </div>
    </Overlay>
  ) : (
    ''
  );
};
export default Modal;
