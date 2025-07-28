import { useState } from "react";
import DataInput from "./DataInput";

const Calculator = () => {
  let [totalAmount, setTotalAmount] = useState({ income: 0, expense: 0 });
  // console.log(totalAmount);

  let incomeTotal = 0;
  let expenceTotal = 0;

  return (
    <div className="w-[80%] p-6">
      <h1 className="font-semibold  text-5xl mb-4">Available Budget</h1>
      <h2 className="font-semibold text-4xl mb-6">
        {totalAmount.income - totalAmount.expense}
      </h2>

      <div className="w-full">
        <h3 className="bg-teal-600 p-5 font-bold w-[40%] m-auto mb-5">
          Income {totalAmount.income}
        </h3>
        <h3 className="bg-red-600 p-5 font-bold w-[40%] m-auto mb-5">
          Expense {totalAmount.expense}
        </h3>
      </div>
      <div>
        <DataInput
          incomeTotal={incomeTotal}
          expenceTotal={expenceTotal}
          // setTotalAmount={setTotalAmount}
        />
      </div>
    </div>
  );
};

export default Calculator;
