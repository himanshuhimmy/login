import { useRef } from "react";

const DietInput = ({ setMeals, meals }) => {
  let food = useRef();
  let carbs = useRef();
  let protien = useRef();
  let fats = useRef();
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

  function onClickHandle(meal, itemId, event) {
    event.preventDefault();
    let initalData = [...meals];
    let UserTime = time.current.value;
    let UserFood = food.current.value;
    let UserCarbs = carbs.current.value;
    let UserProtien = protien.current.value;
    let UserFats = fats.current.value;

    let updated = initalData.map((Meals) => {
      if (Meals.mealName === meal) {
        return {
          ...Meals,
          time: UserTime,
          item: Meals.item.map((el) => {
            if (el.id === itemId) {
              return {
                ...el,
                Food: UserFood,
                Protien: parseInt(UserProtien),
                Carbs: parseInt(UserCarbs),
                Fats: parseInt(UserFats),
              };
            }
            return el;
          }),
        };
      }
    });
    console.log(updated);
    setMeals(updated);
  }
  return (
    <div>
      <div className=" bg-cyan-100 p-4 rounded-xl ">
        <form onSubmit={onClickHandle}>
          {meals.map((el, id) => {
            return (
              <div>
                {el.status && (
                  <div key={id}>
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
                          <div>
                            <div className="w-[20%] m-auto">
                              <div className="flex justify-between p-4">
                                <span> Food You Eat</span>
                                <input
                                  required
                                  ref={food}
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="text"
                                  placeholder="Food"
                                />
                              </div>
                            </div>
                            <div className="w-[45%] m-auto">
                              <div className="flex justify-between p-4">
                                <span>Macros</span>
                                <input
                                  required
                                  ref={carbs}
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Carbs "
                                />
                                <input
                                  required
                                  ref={protien}
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Protien"
                                />
                                <input
                                  required
                                  ref={fats}
                                  className="text-cyan-700 p-1 rounded-lg"
                                  type="number"
                                  placeholder="Fats"
                                />
                              </div>
                              <button
                                onClick={() => AddItem(el.mealName, Item.id)}
                                className="bg-cyan-400 rounded-lg p-2 m-4"
                              >
                                Add Food Item
                              </button>
                              <button
                                onClick={() => RemoveItem(el.mealName, Item.id)}
                                className="bg-red-200 rounded-lg p-2 m-4"
                              >
                                Remove Food Item
                              </button>
                            </div>

                            <button
                              onClick={(e) =>
                                onClickHandle(el.mealName, Item.id, e)
                              }
                            >
                              Submit
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <button
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
        </form>
      </div>
    </div>
  );
};

export default DietInput;
