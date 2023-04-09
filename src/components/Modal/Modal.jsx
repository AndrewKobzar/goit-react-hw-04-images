import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css'

const modal = document.querySelector('#modal');

const Modal = ({ onClose, largeImageURL, user }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackDropClick = e => {
    const backDrop = e.currentTarget;
    const modal = e.target;

    if (backDrop === modal) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackDropClick}>
      <div className={s.Modal} >
        <img src={largeImageURL} alt={user} />
      </div>
    </div>,
    modal
  );
};

export default Modal;
