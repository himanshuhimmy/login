import { useEffect, useRef } from "react";

const Modal = ({ ststus, children }) => {
  let modal = useRef();

  useEffect(() => {
    if (ststus === true) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [ststus]);

  return (
    <dialog
      className="rounded-3xl p-4 flex flex-col items-center justify-center m-auto"
      ref={modal}
    >
      {children}
    </dialog>
  );
};

export default Modal;
