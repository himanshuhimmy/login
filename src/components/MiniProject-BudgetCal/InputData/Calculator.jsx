import { useEffect, useRef, useState } from "react";
import DataInput from "./DataInput";

const Calculator = () => {
  let [monthValue, setmonthValue] = useState();
  let [incomeState, setIncomeState] = useState(() => {
    const saved = localStorage.getItem("incomeState");
    return saved
      ? JSON.parse(saved)
      : [
          {
            enteredDec: "",
            month: "",
            IncomeNew: 0,
          },
        ];
  });

  let [expenceState, setExpenceState] = useState(() => {
    const saved = localStorage.getItem("expenceState");
    return saved
      ? JSON.parse(saved)
      : [
          {
            enteredDec: "",
            month: "",
            ExpenseNew: 0,
          },
        ];
  });

  let inputClass = "rounded-xl p-2 m-5";

  useEffect(() => {
    localStorage.setItem("incomeState", JSON.stringify(incomeState));
  }, [incomeState]);

  useEffect(() => {
    localStorage.setItem("expenceState", JSON.stringify(expenceState));
  }, [expenceState]);

  let filteredIncome = incomeState
    .filter((el) => monthValue === el.month)
    .map((el) => ({
      enteredDec: el.enteredDec,
      IncomeNew: el.IncomeNew,
      month: el.month,
    }));
  console.log(filteredIncome);
  let IncomeMonth = filteredIncome.reduce((total, num) => {
    total += parseInt(num.IncomeNew);
    return total;
  }, 0);

  let filteredExpence = expenceState
    .filter((el) => monthValue === el.month)
    .map((el) => ({
      enteredDec: el.enteredDec,
      ExpenseNew: el.ExpenseNew,
      month: el.month,
    }));

  let ExpenceMonth = filteredExpence.reduce((total, num) => {
    total += parseInt(num.ExpenseNew);
    return total;
  }, 0);

  return (
    <div className="w-[80%] p-6">
      <h1 className="font-semibold  text-5xl mb-4">Available Budget</h1>
      <h2 className="font-semibold text-4xl mb-6">
        {IncomeMonth - ExpenceMonth}
      </h2>

      <div className="w-full">
        <h3 className="bg-teal-600 p-5 font-bold w-[40%] m-auto mb-5">
          Income {IncomeMonth}
        </h3>
        <h3 className="bg-red-600 p-5 font-bold w-[40%] m-auto mb-5">
          Expense {ExpenceMonth}
        </h3>
      </div>

      <input
        value={monthValue}
        onChange={(e) => setmonthValue(e.target.value)}
        className={`w-[25%] ${inputClass}`}
        required
        placeholder="Enter Month"
        type="month"
      />

      <div>
        <DataInput
          setExpenceState={setExpenceState}
          setIncomeState={setIncomeState}
          monthValue={monthValue}
          filteredIncome={filteredIncome}
          filteredExpence={filteredExpence}
        />
      </div>
    </div>
  );
};

export default Calculator;
