import { useRef } from "react";

const DietInput = ({ setMeals, meals }) => {
  let time = useRef();

  function mealSkip(meal) {
    setMeals((prev) =>
      prev.map((el) => (el.mealName === meal ? { ...el, status: false } : el))
    );
  }

  function RemoveItem(meal, id) {
    let initaData = [...meals];
    let updated = initaData.map((Meals) => {
      if (Meals.mealName === meal) {
        return { ...Meals, item: Meals.item.filter((el) => el.id != id) };
      }
      return Meals;
    });
    setMeals(updated);
  }

  function AddItem(meal) {
    let initaData = [...meals];
    let updated = initaData.map((Meals) => {
      if (Meals.mealName === meal) {
        return {
          ...Meals,
          item: [
            ...Meals.item,
            {
              id: Meals.item.length + 1,
              Food: "",
              time: 0,
              Carbs: 0,
              Fats: 0,
              Protien: 0,
            },
          ],
        };
      }
      return Meals;
    });
    setMeals(updated);
  }

  function onChangeHandle(meal, itemId, field, value) {
    let initalSate = [...meals];
    let update = initalSate.map((Meals) =>
      Meals.mealName === meal
        ? {
            ...Meals,
            item: Meals.item.map((Item) =>
              Item.id === itemId ? { ...Item, [field]: value } : Item
            ),
          }
        : Meals
    );

    setMeals(update);
  }

  function onSubmitHandle(e) {
    e.preventDefault();
    const UserTime = time.current.value;
    let initalSate = [...meals];

    let update = initalSate.map((Meals) => ({
      ...Meals,
      time: UserTime,
    }));

    setMeals(update);
  }

  return (
    <div>
      <div className=" bg-cyan-100 p-4 rounded-xl ">
        <form onSubmit={onSubmitHandle}>
          {meals.map((el, id) => {
            return (
              <div key={id}>
                {el.status && (
                  <div>
                    <h1 className="text-cyan-800 text-3xl bg-cyan-200 p-4 rounded-2xl">
                      {el.mealName}
                      <span className="p-2">Time</span>
                      <input
                        required
                        ref={time}
                        type="time"
                        className="text-cyan-700 p-1 rounded-lg"
                      />
                    </h1>

                    <div>
                      {el.item.map((Item) => {
                        return (
                          <div key={Item.id}>
                            <div className="w-[20%] m-auto">
                              <div className="flex justify-between p-4">
                                <span> Food You Eat</span>
                                <input
                                  required
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="text"
                                  placeholder="Food"
                                  onChange={(e) =>
                                    onChangeHandle(
                                      el.mealName,
                                      Item.id,
                                      "Food",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>

                            <div className="w-[45%] m-auto">
                              <div className="flex justify-between p-4">
                                <span>Macros</span>
                                <input
                                  required
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Carbs"
                                  onChange={(e) =>
                                    onChangeHandle(
                                      el.mealName,
                                      Item.id,
                                      "Carbs",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  required
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Protien"
                                  onChange={(e) =>
                                    onChangeHandle(
                                      el.mealName,
                                      Item.id,
                                      "Protien",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  required
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Fats"
                                  onChange={(e) =>
                                    onChangeHandle(
                                      el.mealName,
                                      Item.id,
                                      "Fats",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>

                              <button
                                type="button"
                                onClick={() => AddItem(el.mealName)}
                                className="bg-cyan-400 rounded-lg p-2 m-4"
                              >
                                Add Food Item
                              </button>
                              <button
                                type="button"
                                onClick={() => RemoveItem(el.mealName, Item.id)}
                                className="bg-red-200 rounded-lg p-2 m-4"
                              >
                                Remove Food Item
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={() => mealSkip(el.mealName)}
                      className="bg-red-400 rounded-lg p-2 m-4"
                    >
                      I Skip This MEAL
                    </button>
                    <br />
                  </div>
                )}
              </div>
            );
          })}
          <button type="submit" className="bg-green-400 p-2 rounded-lg">
            Save All
          </button>
        </form>
      </div>
    </div>
  );
};

export default DietInput;
