import { useEffect, useRef, useState } from "react";
import DataInput from "./DataInput";
import Months from "../MonthsToMonths/Months";

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
            id: 0,
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
            id: 0,
          },
        ];
  });

  let [month, setMonth] = useState({ from: ``, to: `` });

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
      id: el.id,
    }));

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
      id: el.id,
    }));

  let ExpenceMonth = filteredExpence.reduce((total, num) => {
    total += parseInt(num.ExpenseNew);
    return total;
  }, 0);

  function getLast6Months(monthValue) {
    if (!monthValue) return [];
    const [year, month] = monthValue.split("-").map(Number);
    const months = [];
    for (let i = 0; i < 6; i++) {
      const d = new Date(year, month - 1 - i, 1);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      months.push(`${y}-${m}`);
      console.log(months);
    }
    return months;
  }

  function monthsRange(from, to) {
    if (!from || !to) {
      return [];
    }

    let result = [];
    let [fromYear, fromMonth] = from.split("-").map(Number);
    let [toYear, toMonth] = to.split("-").map(Number);

    let current = new Date(fromYear, fromMonth - 1, 1);
    let end = new Date(toYear, toMonth - 1, 1);

    while (current <= end) {
      const y = current.getFullYear();
      const m = String(current.getMonth() + 1).padStart(2, "0");
      result.push(`${y}-${m}`);
      current.setMonth(current.getMonth() + 1);
    }
    return result;
  }

  function EndtoEndMonthIncome() {
    const monthsInRange = monthsRange(month.from, month.to);
    const filtered = incomeState.filter((el) =>
      monthsInRange.includes(el.month)
    );
    return filtered;
  }
  let incomeRange = EndtoEndMonthIncome();

  function EndtoEndMonthExpence() {
    const monthsInRange = monthsRange(month.from, month.to);
    let filtered = expenceState.filter((el) =>
      monthsInRange.includes(el.month)
    );
    return filtered;
  }
  let expenceRange = EndtoEndMonthExpence();

  function AlterIncome() {
    const last6Months = getLast6Months(monthValue);
    const filtered = incomeState.filter((el) => last6Months.includes(el.month));
    if (filtered.length === 0) return 0;
    const sum = filtered.reduce((acc, el) => acc + parseInt(el.IncomeNew), 0);
    console.log(sum);
    return sum === 0
      ? "₹0"
      : Math.round(sum / filtered.length).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        });
  }

  function AlterExpence() {
    const last6Months = getLast6Months(monthValue);
    const filtered = expenceState.filter((el) =>
      last6Months.includes(el.month)
    );
    if (filtered.length === 0) return 0;
    const sum = filtered.reduce((acc, el) => acc + parseInt(el.ExpenseNew), 0);
    return sum === 0
      ? "₹0"
      : Math.round(sum / filtered.length).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        });
  }

  function RemoveIncome(id) {
    setIncomeState((prev) => prev.filter((el) => el.id !== id));
  }

  function RemoveExpence(id) {
    setExpenceState((prev) => prev.filter((el) => el.id !== id));
  }

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

      <div className="p-3 w-[15%] bg-zinc-500 rounded-3xl absolute right-[2%] top-[10%]">
        <h1 className="text-3xl font-semibold mb-4">Avrage of last 6 months</h1>
        <p className="text-green-400 text-xl font-semibold mb-2">
          Income {AlterIncome()}
        </p>
        <p className=" text-red-400 text-xl font-semibold">
          Expence {AlterExpence()}
        </p>
      </div>

      <div>
        {
          <Months
            setMonth={setMonth}
            income={incomeRange}
            expence={expenceRange}
            removeincome={RemoveIncome}
            removeexpence={RemoveExpence}
          />
        }

        <DataInput
          removeincome={RemoveIncome}
          removeexpence={RemoveExpence}
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
