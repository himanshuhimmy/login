import React, { useEffect, useRef } from "react";

const Dialog = ({ children, winner, double }) => {
  let toggle = useRef();

  useEffect(() => {
    console.log(`Modal`);
    if (winner || double) {
      toggle.current.showModal();
    } else {
      toggle.current.close();
    }
  }, [winner]);

  return (
    <dialog
      className="rounded-3xl p-4 flex flex-col items-center justify-center m-auto"
      ref={toggle}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
