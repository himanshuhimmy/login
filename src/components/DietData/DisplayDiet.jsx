const DisplayDiet = ({ meal, toggle, name }) => {
  function GetTotal(item) {
    return item.reduce(
      (total, items) => {
        total.Carbs += parseInt(items.Carbs);
        total.Protien += parseInt(items.Protien);
        total.Fats += parseInt(items.Fats);
        return total;
      },
      { Carbs: 0, Fats: 0, Protien: 0 }
    );
  }

  const formatTime12h = (timeStr) => {
    if (!timeStr) return "";
    const [hour, minute] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hour, minute);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const dailyItems = meal.map((Meals) => Meals.item).flat();
  const dailyTotal = GetTotal(dailyItems);

  console.log(dailyItems);
  return (
    <div>
      {meal.map((Meals) => {
        let total = GetTotal(Meals.item);
        return (
          <div className="bg-cyan-200 rounded-xl m-2 p-2">
            <div>
              {name.map((el) => (
                <h1 className="font-semibold text-2xl mb-3">
                  {el.UserName}'s Diet Plan
                </h1>
              ))}
            </div>
            {Meals.status && (
              <>
                <h1 className="text-3xl font-bold p-4 rounded-2xl w-[25%] m-auto bg-cyan-300">
                  {Meals.mealName} Time :-
                  <span className="text-cyan-900">
                    {formatTime12h(Meals.time)}
                  </span>
                </h1>
                <div className="w-[95%] bg-cyan-300 m-4 text-center rounded-3xl">
                  <div>
                    {Meals.item.map((item, id) => {
                      return (
                        <div>
                          <p className="font-semibold p-3 text-xl">
                            ITEM NO {id + 1} :-
                            <span className="text-cyan-900">{item.Food}</span>
                          </p>
                          <div className="flex justify-between w-[20%] m-auto">
                            <p className="text-purple-700">
                              carbs {item.Carbs} gm
                            </p>

                            <p className="text-green-700">
                              Protien {item.Protien} gm
                            </p>
                            <p className="text-red-700">Fats {item.Fats} gm</p>
                          </div>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                  <h1 className="mb-2 text-xl font-semibold pt-4">
                    TOTAL MACROS IN A Meal
                  </h1>
                  <div className="flex justify-around w-[50%] m-auto pb-6">
                    <p className="text-purple-700">CARBS :- {total.Carbs} GM</p>
                    <p className="text-red-700"> FATS :- {total.Fats} GM </p>
                    <p className="text-green-700">
                      PROTIEN :- {total.Protien} GM
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="bg-cyan-400 m-4 p-4 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-2">Total Macros In A Day</h1>
        <div className="flex justify-around w-[50%] m-auto">
          <p className="text-purple-700">CARBS :- {dailyTotal.Carbs} GM</p>
          <p className="text-red-700">FATS :- {dailyTotal.Fats} GM</p>
          <p className="text-green-700">PROTEIN :- {dailyTotal.Protien} GM</p>
        </div>
      </div>
      {/* <button onClick={toggle}>Back </button> */}
    </div>
  );
};

export default DisplayDiet;
