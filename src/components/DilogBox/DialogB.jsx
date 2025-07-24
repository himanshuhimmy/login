import { useEffect, useRef } from "react";

const DialogB = ({ toggle, children }) => {
  let modal = useRef();
  useEffect(() => {
    if (toggle) {
      console.log(`working`);
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [toggle]);
  return (
    <dialog ref={modal} className="p-11 rounded-2xl ">
      {children}
    </dialog>
  );
};

export default DialogB;
