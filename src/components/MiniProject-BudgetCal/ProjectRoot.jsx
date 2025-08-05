import React, { useState } from "react";
import CalcRoot from "./CalcRoot";
import HeadBar from "./HeadBar";
import SideNav from "./Sidebar/SideNav";
import Calculator from "./InputData/Calculator";
import { NavLink, Outlet } from "react-router-dom";

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
          <div className="flex justify-center text-4xl">
            <NavLink className={`p-3 mx-4`} to={`/calculator`}>
              Calculator
            </NavLink>
            <NavLink className={`p-3 mx-4`} to={`/months`}>
              Months
            </NavLink>
          </div>
          <div className="w-full flex">
            <SideNav />
            <Outlet />
            {/* <Calculator /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectRoot;
