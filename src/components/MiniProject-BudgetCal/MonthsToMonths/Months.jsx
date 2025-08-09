import { useContext, useRef } from "react";

import ValuesList from "../InputData/ValuesList";
import { stateContext } from "../Store-context/ProjectContext";

const Months = ({ setMonth, income, expence, removeincome, removeexpence }) => {
  let context = useContext(stateContext);

  let fromref = useRef();
  let toref = useRef();

  function onsubmitForm(event) {
    event.preventDefault();
    let MonthFrom = fromref.current.value;
    let monthTo = toref.current.value;
    setMonth({ from: MonthFrom, to: monthTo });
  }

  return (
    <div>
      <form className="flex" onSubmit={onsubmitForm}>
        <div className="flex text-center m-auto">
          <div className="p-3 m-2">
            <p className="text-3xl mb-6">select From month </p>
            <input ref={fromref} required type="month" />
          </div>
          <div className="p-3 m-2">
            <p className="text-3xl mb-6">select to month</p>
            <input ref={toref} required type="month" />
          </div>
          <button className="text-2xl m-3 ">Show</button>
        </div>
      </form>
      <ValuesList
        removeincome={removeincome}
        removeexpence={removeexpence}
        income={income}
        expence={expence}
      />
    </div>
  );
};

export default Months;
