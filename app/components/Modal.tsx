import React from "react";

/**
 *
 *  setModalOpen as () => void in your interface is about ensuring that this prop is used correctly within your component or when passing it around. It's a TypeScript feature that helps with code reliability and maintenance, especially in larger projects or teams.
 */

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

/**
 * <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
 * uses ternary in classname checks state of modal from props
 * and either has modal-open or and empy string (closed)
 */

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className=' modal-box'>
        <label
          onClick={() => setModalOpen(false)}
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
          ✕
        </label>

        {children}
      </div>
    </div>
  );
};

export default Modal;
