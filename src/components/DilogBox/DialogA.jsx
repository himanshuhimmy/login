import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const DialogA = ({ toggle, children }) => {
  const modal = useRef();

  useEffect(() => {
    if (!modal.current) return;
    if (toggle) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [toggle]);

  return ReactDOM.createPortal(
    <dialog ref={modal}>{children}</dialog>,
    document.getElementById("modal-root")
  );
};

export default DialogA;
