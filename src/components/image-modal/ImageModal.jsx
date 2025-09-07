import Modal from "react-modal";
import css from "./ImageModal.module.css"; 


Modal.setAppElement("#root"); 

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      isOpen={isOpen}
      onRequestClose={onClose}       
      contentLabel="Selected Image"
      shouldCloseOnOverlayClick={true} // allow closing by clicking outside
    >
      <img
        className={css.modalImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;