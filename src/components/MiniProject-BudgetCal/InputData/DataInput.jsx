import { useRef, useState } from "react";
import ValuesList from "./ValuesList";

const DataInput = ({
  setIncomeState,
  setExpenceState,
  monthValue,
  filteredExpence,
  filteredIncome,
  removeincome,
  removeexpence,
  monthToMonth,
}) => {
  let inputClass = "rounded-xl p-2 m-5";

  let inputDescription = useRef();
  let inputvalues = useRef();
  let reset = useRef();

  let [selectedValues, setSelectedValues] = useState(false);

  function SelectValue(event) {
    let source = event.target.value;
    source === `income` ? setSelectedValues(true) : setSelectedValues(false);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    const inputValue = inputvalues.current.value;
    const decValue = inputDescription.current.value;

    selectedValues
      ? setIncomeState((prev) => [
          ...prev,
          {
            enteredDec: decValue,
            month: monthValue,
            IncomeNew: inputValue,
            id: new Date().getTime(),
          },
        ])
      : setExpenceState((prevData) => [
          ...prevData,
          {
            enteredDec: decValue,
            month: monthValue,
            ExpenseNew: inputValue,
            id: new Date().getTime(),
          },
        ]);

    reset.current.reset();
    setSelectedValues(false);
    monthToMonth(false);
  }

  return (
    <div className="w-full ">
      <form ref={reset} onSubmit={onSubmitForm} className="flex text-black">
        <div className="w-[15%] flex justify-center">
          <select className="p-3" onChange={SelectValue} name="DataInput" id="">
            <option value="expense"> - </option>
            <option value="income"> + </option>
          </select>
        </div>
        <div className="w-[60%]">
          <input
            ref={inputDescription}
            className={`w-[25%] ${inputClass}`}
            required
            placeholder="Description"
            type="text"
          />

          <input
            ref={inputvalues}
            className={`w-[25%] ${inputClass}`}
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
      <div>
        <ValuesList
          removeexpence={removeexpence}
          removeincome={removeincome}
          expence={filteredExpence}
          income={filteredIncome}
          value={selectedValues}
        />
      </div>
      ;
    </div>
  );
};

export default DataInput;
