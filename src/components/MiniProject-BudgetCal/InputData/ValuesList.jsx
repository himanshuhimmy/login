import { useContext } from "react";
import { stateContext } from "../Store-context/ProjectContext";
const ValuesList = () => {
  let context = useContext(stateContext);

  let mappingIncome = context.monthToMonth
    ? context.incomeRange
    : context.filteredIncome;

  let mappingExpence = context.monthToMonth
    ? context.expenceRange
    : context.filteredExpence;

  return (
    <div className="w-full  mt-3 bg-yellow-100 h-svh rounded-t-2xl">
      <div className="w-full px-10 flex justify-between mt-7 ">
        <div className="w-[50%] p-7">
          <h1 className="text-5xl text-green-700 font-semibold">Income</h1>
          {mappingIncome === undefined
            ? ``
            : mappingIncome.map((el, id) => {
                return (
                  <div
                    key={id}
                    className="flex justify-between text-green-400 font-medium items-center text-2xl my-4"
                  >
                    <p>{el.enteredDec}</p>
                    <p>{el.month}</p>
                    <p>+ {el.IncomeNew}</p>
                    <button
                      onClick={() => context.RemoveIncome(el.id)}
                      className="bg-slate-400 p-3 rounded-xl mr-4 text-white"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
        </div>
        <div className="w-[50%] p-7">
          <h1 className="text-5xl text-red-700 font-semibold">Expenses</h1>
          {mappingExpence === undefined
            ? ``
            : mappingExpence.map((el, id) => {
                return (
                  <div
                    key={id}
                    className="flex justify-between text-red-400 font-medium items-center text-2xl my-4"
                  >
                    <p>{el.enteredDec}</p>
                    <p>{el.month}</p>
                    <p>- {el.ExpenseNew}</p>
                    <button
                      onClick={() => context.RemoveExpence(el.id)}
                      className="bg-slate-400 p-3 rounded-xl mr-4 text-white"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ValuesList;
