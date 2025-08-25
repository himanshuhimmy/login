const DisplayDiet = ({ meal }) => {
  function GetTotal(item) {
    return item.reduce(
      (total, items) => {
        total.Carbs += items.Carbs;
        total.Protien += items.Protien;
        total.Fats += items.Fats;
        return total;
      },
      { Carbs: 0, Fats: 0, Protien: 0 }
    );
  }

  return (
    <div>
      {meal.map((Meals) => {
        let total = GetTotal(Meals.item);
        return (
          <div className="bg-cyan-200 rounded-xl m-2 p-2">
            <h1 className="text-3xl font-bold p-4 rounded-2xl w-[25%] m-auto bg-cyan-300">
              {Meals.mealName}
            </h1>
            <div className="w-[95%] bg-cyan-300 m-4 text-center rounded-3xl">
              <div>
                {Meals.item.map((item, id = 1) => {
                  return (
                    <div>
                      <p className="font-semibold p-3 text-xl">
                        ITEM NO {id} :- {item.Food}
                      </p>
                      <div className="flex justify-between w-[20%] m-auto">
                        <p className="text-purple-700">carbs {item.Carbs} gm</p>

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
                TOTAL MACROS IN A DAY
              </h1>
              <div className="flex justify-around w-[50%] m-auto pb-6">
                <p className="text-purple-700"> CARBS :- {total.Carbs} GM </p>
                <p className="text-red-700"> FATS :- {total.Fats} GM </p>
                <p className="text-green-700">PROTIEN :- {total.Protien} GM</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayDiet;
