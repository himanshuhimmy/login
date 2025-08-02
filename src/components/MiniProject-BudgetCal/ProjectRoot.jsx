import React, { useState } from "react";
import CalcRoot from "./CalcRoot";
import HeadBar from "./HeadBar";
import SideNav from "./Sidebar/SideNav";
import Calculator from "./InputData/Calculator";

const ProjectRoot = () => {
  let [login, setLogin] = useState(true);

  return (
    <div>
      {!login && <CalcRoot login={setLogin} />}

      {login && (
        <div>
          <div>
            <HeadBar login={setLogin} />
          </div>
          <div className="w-full flex">
            <SideNav />
            <Calculator />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectRoot;
