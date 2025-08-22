import React, { useRef } from "react";

const DietInput = ({ setMeals, meals }) => {
  let initaData = [...meals];

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

  let noOfItems = [
    {
      mealName: "Breakfast",
      meal: 1,
    },
    { mealName: "Brunch", meal: 1 },
    { mealName: "Lunch", meal: 1 },
    { mealName: "Snack", meal: 1 },
    { mealName: "PreWorkout", meal: 1 },
    { mealName: "Dinner", meal: 1 },
  ];
  function AddItem(meal) {
    noOfItems.map((el) =>
      el.mealName === meal ? { ...el, meal: meal + 1 } : el
    );

    setMeals((prev) =>
      prev.map((el) =>
        el.mealName === meal
          ? {
              ...el,
              item2: { Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 },
            }
          : el
      )
    );
  }
  function RemoveItem() {}

  function onClickHandle(event) {
    event.preventDefault();
    let UserTime = time.current.vlaue;
    let UserFood = food.current.value;
    let UserCarbs = carbs.current.value;
    let UserProtien = protien.current.value;
    let UserFats = fats.current.value;

    // initaData = {
    //   time: UserTime,
    //   Food: UserFood,
    //   Carbs: parseInt(UserCarbs),
    //   Fats: parseInt(UserProtien),
    //   Protien: parseInt(UserFats),
    // };

    update(initaData);
  }
  return (
    <div>
      <div className=" bg-cyan-100 p-4 rounded-xl ">
        {initaData.map((el) => {
          return (
            <div>
              {el.status && (
                <div>
                  <h1 className="text-cyan-800 text-3xl bg-cyan-200 p-4 rounded-2xl">
                    {el.mealName}
                    <span className="p-2">Time</span>
                    <input
                      ref={time}
                      type="time"
                      className="text-cyan-700 p-1 rounded-lg"
                    />
                  </h1>
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
                        onClick={() => AddItem(el.mealName)}
                        className="bg-cyan-400 rounded-lg p-2 m-4"
                      >
                        Add Food Item
                      </button>
                      <button
                        onClick={() => RemoveItem(el.mealName)}
                        className="bg-red-200 rounded-lg p-2 m-4"
                      >
                        Remove Food Item
                      </button>
                    </div>
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
      </div>
    </div>
  );
};

export default DietInput;
