import { useState } from "react";
import FormMain from "./FormMain";

const RootForm = () => {
  return (
    <div className="p-10 rounded-3xl border-spacing-2 border-dotted">
      <div>
        <FormMain />
      </div>
    </div>
  );
};

export default RootForm;
