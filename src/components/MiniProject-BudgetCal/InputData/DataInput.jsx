import React, { useRef, useState } from "react";
import ValuesList from "./ValuesList";

const DataInput = ({ setTotalAmount }) => {
  let inputClass = "rounded-xl p-2 m-5";

  let inputDescription = useRef();
  let inputvalues = useRef();

  let [incomeState, setIncomeState] = useState([
    {
      enteredDec: ``,
      IncomeNew: 0,
    },
  ]);

  let [expenceState, setExpenceState] = useState([
    {
      enteredDec: ``,
      ExpenseNew: 0,
    },
  ]);

  let [selectedValues, setSelectedValues] = useState(false);

  function SelectValue(event) {
    let source = event.target.value;
    source === `income` ? setSelectedValues(true) : setSelectedValues(false);
    // console.log(source);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    console.log(selectedValues);
    selectedValues
      ? setIncomeState((prev) => [
          ...prev,
          {
            enteredDec: inputDescription.current.value,
            IncomeNew: inputvalues.current.value,
          },
        ])
      : setExpenceState((prevData) => [
          ...prevData,
          {
            enteredDec: inputDescription.current.value,
            ExpenseNew: inputvalues.current.value,
          },
        ]);

    incomeState.map((el) => {
      selectedValues &&
        setTotalAmount((prev) => ({
          ...prev,
          income: parseInt(prev.income) + parseInt(el.IncomeNew),
        }));
    });

    expenceState.map((el) => {
      !selectedValues &&
        setTotalAmount((prev) => ({
          ...prev,
          expense: parseInt(prev.expense) + parseInt(el.ExpenseNew),
        }));
    });
  }

  return (
    <div className="w-full ">
      <form onSubmit={onSubmitForm} className="flex text-black">
        <div className="w-[15%] flex justify-center">
          <select className="p-3" onChange={SelectValue} name="DataInput" id="">
            <option value="expense"> - </option>
            <option value="income"> + </option>
          </select>
        </div>
        <div className="w-[60%]">
          <input
            ref={inputDescription}
            className={`w-[40%] ${inputClass}`}
            required
            placeholder="Description"
            type="text"
          />

          <input
            ref={inputvalues}
            className={`w-[40%] ${inputClass}`}
            required
            placeholder="value"
            type="number"
            minLength={1}
          />
        </div>
        <div className="w-[15%] flex justify-center">
          <button className=" bg-teal-400 rounded-xl p-4  m-2">Confirm</button>
        </div>
      </form>
      <ValuesList
        expence={expenceState}
        income={incomeState}
        value={selectedValues}
      />
      ;
    </div>
  );
};

export default DataInput;
