import React, { useEffect, useRef } from "react";

const Modal = ({ open, children }) => {
  let dialog = useRef();
  useEffect(() => {
    console.log(`open`);
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.Close();
    }
  }, []);

  return <dialog ref={dialog}> {children} </dialog>;
};

export default Modal;
