import { useContext, useEffect, useState } from "react";
import DataInput from "./DataInput";
import Months from "../MonthsToMonths/Months";
import { stateContext } from "../Store-context/ProjectContext";

const Calculator = () => {
  let context = useContext(stateContext);

  let inputClass = "rounded-xl p-2 m-5";

  return (
    <div className="w-[80%] p-6">
      <div className="text-center">
        <h1 className="font-semibold   text-5xl mb-4">Available Budget</h1>
        <h2 className="font-semibold text-4xl mb-6">
          {context.IncomeMonth - context.ExpenceMonth}
        </h2>

        <div className="w-full">
          <h3 className="bg-teal-600 p-5 font-bold w-[40%] m-auto mb-5">
            Income {context.IncomeMonth}
          </h3>
          <h3 className="bg-red-600 p-5 font-bold w-[40%] m-auto mb-5">
            Expense {context.ExpenceMonth}
          </h3>
        </div>

        <input
          value={context.monthValue}
          onChange={(e) => context.setmonthValue(e.target.value)}
          className={`w-[25%] ${inputClass}`}
          required
          placeholder="Enter Month"
          type="month"
        />

        <div className="p-3 w-[15%] bg-zinc-500 rounded-3xl absolute right-[2%] top-[10%]">
          <h1 className="text-3xl font-semibold mb-4">
            Avrage of last 6 months
          </h1>
          <p className="text-green-400 text-xl font-semibold mb-2">
            Income {context.AlterIncome()}
          </p>
          <p className=" text-red-400 text-xl font-semibold">
            Expence {context.AlterExpence()}
          </p>
        </div>
      </div>

      <div>
        <DataInput
          removeincome={context.RemoveIncome}
          removeexpence={context.RemoveExpence}
          setExpenceState={context.setExpenceState}
          setIncomeState={context.setIncomeState}
          monthValue={context.monthValue}
          filteredIncome={context.filteredIncome}
          filteredExpence={context.filteredExpence}
          monthToMonth={context.setMonthToMonth}
        />
      </div>
    </div>
  );
};

export default Calculator;
