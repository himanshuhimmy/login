import React, { useEffect, useRef } from "react";

const Modal = ({ state, children }) => {
  let open = useRef();

  useEffect(() => {
    if (state) {
      open.current.showModal();
    } else {
      open.current.close();
    }
  }, [state]);

  return (
    <dialog
      className="rounded-3xl p-4 flex flex-col items-center justify-center m-auto"
      ref={open}
    >
      {children}
    </dialog>
  );
};

export default Modal;
