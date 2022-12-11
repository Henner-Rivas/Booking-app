import "./styles.scss";

type Props = {
  children: JSX.Element[];
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = (props: Props) => {
  let { isOpen, children, closeModal } = props;
  const handleModalContainerClick = (e: any) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
