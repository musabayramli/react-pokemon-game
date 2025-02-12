
const Modal = ({ winner, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{winner}</h2>
        <button className="btn close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
