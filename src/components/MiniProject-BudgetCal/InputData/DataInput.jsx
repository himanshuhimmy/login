import { useRef, useState } from "react";
import ValuesList from "./ValuesList";

const DataInput = ({ expenceTotal, incomeTotal, setTotalAmount }) => {
  let inputClass = "rounded-xl p-2 m-5";

  let inputDescription = useRef();
  let inputvalues = useRef();

  let [incomeState, setIncomeState] = useState([
    {
      enteredDec: ``,
      month: ``,
      IncomeNew: 0,
    },
  ]);

  let [expenceState, setExpenceState] = useState([
    {
      enteredDec: ``,
      month: ``,
      ExpenseNew: 0,
    },
  ]);

  let monthRef = useRef();

  let [selectedValues, setSelectedValues] = useState(false);

  function SelectValue(event) {
    let source = event.target.value;
    source === `income` ? setSelectedValues(true) : setSelectedValues(false);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    selectedValues
      ? setIncomeState((prev) => [
          ...prev,
          {
            enteredDec: inputDescription.current.value,
            month: monthRef.current.value,
            IncomeNew: inputvalues.current.value,
          },
        ])
      : setExpenceState((prevData) => [
          ...prevData,
          {
            enteredDec: inputDescription.current.value,
            month: monthRef.current.value,
            ExpenseNew: inputvalues.current.value,
          },
        ]);

    incomeState.map((el) => {
      incomeTotal += parseInt(el.IncomeNew);
    });
    setTotalAmount((prev) => ({ ...prev, income: incomeTotal }));

    expenceState.map((el) => {
      expenceTotal += parseInt(el.ExpenseNew);
    });
    setTotalAmount((prev) => ({ ...prev, expense: expenceTotal }));
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

          <input
            ref={monthRef}
            className={`w-[25%] ${inputClass}`}
            required
            placeholder="Enter Month"
            type="month"
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
