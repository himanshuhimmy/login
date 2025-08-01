import { useRef, useState } from "react";
import ValuesList from "./ValuesList";

const DataInput = ({ expenceTotal, incomeTotal, setTotalAmount }) => {
  let inputClass = "rounded-xl p-2 m-5";

  let inputDescription = useRef();
  let inputvalues = useRef();
  let reset = useRef();
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

  let [tempExp, setTempExp] = useState([]);
  let [tempInc, setTempInc] = useState([]);
  let monthRef = useRef();

  let [selectedValues, setSelectedValues] = useState(false);
  console.log(selectedValues);

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

    incomeState
      .filter((el) => monthRef.current.value === el.month)
      .map((el) => (incomeTotal += parseInt(el.IncomeNew)));

    selectedValues &&
      setTotalAmount((prev) => ({
        ...prev,
        income: incomeTotal + parseInt(inputvalues.current.value),
      }));
    console.log(incomeTotal);

    expenceState
      .filter((el) => monthRef.current.value === el.month)
      .map((el) => {
        expenceTotal += parseInt(el.ExpenseNew);
      });
    !selectedValues &&
      setTotalAmount((prev) => ({
        ...prev,
        expense: expenceTotal + parseInt(inputvalues.current.value),
      }));

    let filteredIncome = incomeState
      .filter((el) => monthRef.current.value === el.month)
      .map((el) => ({
        enteredDec: el.enteredDec,
        IncomeNew: el.IncomeNew,
        month: el.month,
      }));
    setTempInc(filteredIncome);

    let filteredExpence = expenceState
      .filter((el) => monthRef.current.value === el.month)
      .map((el) => ({
        enteredDec: el.enteredDec,
        ExpenseNew: el.ExpenseNew,
        month: el.month,
      }));
    setTempExp(filteredExpence);

    // reset.current.reset();
    // inputvalues.current.value = "";
    // inputDescription.current.value = "";
    // monthRef.current.value = "";
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
        // expence={expenceState}
        expence={tempExp}
        // income={incomeState}
        income={tempInc}
        value={selectedValues}
      />
      ;
    </div>
  );
};

export default DataInput;
