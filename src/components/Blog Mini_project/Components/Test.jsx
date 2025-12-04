import React, { useMemo, useState } from "react";

const Test = () => {
  let [rolesState, setRolesState] = useState({
    manager: true,
    editor: false,
    writer: false,
  });

  // Derive `active` from rolesState (no manual sync needed)
  const active = useMemo(() => {
    return (
      (rolesState.manager === true || rolesState.editor === true) &&
      rolesState.writer === false
    );
  }, [rolesState]);

  function clicked() {
    console.log("clicked button");
    console.log("roles:", rolesState);
    console.log("active:", active);
  }

  return (
    <div className="text-center">
      <button
        disabled={active === false}
        onClick={clicked}
        className={` ${
          active === false ? `bg-red-300` : `bg-green-300`
        } px-3 py-2  rounded-xl`}
      >
        Test
      </button>
    </div>
  );
};

export default Test;
