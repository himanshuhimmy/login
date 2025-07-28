const ValuesList = ({ income, expence }) => {
  return (
    <div className="w-full  mt-3 bg-yellow-100 h-svh rounded-t-2xl">
      {/* {console.log(JSON.stringify(data, null, 2))} */}

      <div className="w-full px-10 flex justify-between mt-7 ">
        <div className="w-[50%] p-7">
          <h1 className="text-5xl text-green-700 font-semibold">Income</h1>
          {income.map((el, id) => {
            return (
              <div
                key={id}
                className="flex justify-between text-green-400 font-medium text-2xl mb-3"
              >
                <p>{el.enteredDec}</p>
                <p>{el.month}</p>
                <p>+ {el.IncomeNew}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[50%] p-7">
          <h1 className="text-5xl text-red-700 font-semibold">Expenses</h1>
          {expence.map((el, id) => {
            return (
              <div
                key={id}
                className="flex justify-between text-red-400 font-medium text-2xl mb-3"
              >
                <p>{el.enteredDec}</p>
                <p>{el.month}</p>
                <p>- {el.ExpenseNew}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ValuesList;
