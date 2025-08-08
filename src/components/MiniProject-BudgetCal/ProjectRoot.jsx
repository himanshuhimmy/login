import React, { useState } from "react";
import CalcRoot from "./CalcRoot";
import HeadBar from "./HeadBar";
import SideNav from "./Sidebar/SideNav";
import Calculator from "./InputData/Calculator";
import { stateContext } from "./Store-context/ProjectContext";

const ProjectRoot = () => {
  let [login, setLogin] = useState(true);
  let [toggle, setToggle] = useState({
    calculator: true,
    month: false,
  });

  function ForCalculator() {
    setToggle({ calculator: true, month: false });
  }

  function ForMonth() {
    setToggle({ calculator: false, month: true });
  }

  let ctxValue = toggle;
  console.log(toggle);

  return (
    <div>
      {!login && <CalcRoot login={setLogin} />}

      {login && (
        <div>
          <div>
            <HeadBar login={setLogin} />
          </div>
          <div className="flex justify-center text-4xl">
            <h1
              onClick={ForCalculator}
              className={`p-3 mx-4`}
              to={`/calculator`}
            >
              <button>Calculator</button>
            </h1>
            <h1 onClick={ForMonth} className={`p-3 mx-4`} to={`/months`}>
              <button>Months</button>
            </h1>
          </div>

          <stateContext value={ctxValue}>
            <div className="w-full flex">
              <SideNav />
              {/* <Outlet /> */}
              <Calculator />
            </div>
          </stateContext>
        </div>
      )}
    </div>
  );
};

export default ProjectRoot;
