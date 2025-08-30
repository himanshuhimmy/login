import { useState } from "react";
import DisplayDiet from "./DisplayDiet";

const UserInput = ({ meals, setMeals, name, SetName }) => {
  let inputBannerClass = " p-3 text-cyan-700 font-semibold";
  let inputClass = "rounded-lg p-1 mb-2 text-cyan-600";
  let buttonClass =
    "bg-cyan-600 p-4 rounded-xl text-white  hover:bg-cyan-500 transition-all duration-500";

  let [navInput, setNavInput] = useState(4);

  function setName(e) {
    let initialSate = [...name];
    let update = initialSate.map((el) => ({ ...el, UserName: e.target.value }));
    SetName(update);
  }
  function generateMeals(count) {
    return Array.from({ length: count }, (_, i) => ({
      mealName: "",
      id: i + 1,
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", Carbs: 0, Fats: 0, Protein: 0 }],
    }));
  }

  function setNoMeal(e) {
    let initialSate = [...name];
    const mealCount = parseInt(e.target.value);
    let update = initialSate.map((el) => ({ ...el, mealNo: mealCount }));
    const newMeals = generateMeals(mealCount);
    setMeals(newMeals);
    SetName(update);
  }

  // next prev
  function onNextHandle(event) {
    event.preventDefault();
    if (navInput === 4) {
      setNavInput(1);
    } else {
      setNavInput(navInput + 1);
    }
  }
  function onPrevHandle() {
    setNavInput(navInput - 1);
  }

  // update meal name and time
  function MealName(Event, id) {
    let initalSate = [...meals];
    let userMeal = Event.target.value;
    let update = initalSate.map((el) =>
      el.id === id ? { ...el, mealName: userMeal } : el
    );
    setMeals(update);
  }
  function MealTime(Event, id) {
    let initalSate = [...meals];
    let userTime = Event.target.value;
    let update = initalSate.map((el) =>
      el.id === id ? { ...el, time: userTime } : el
    );
    setMeals(update);
  }

  // add and remove item

  function handleAddItem(Mid, Iid) {
    let initalSate = [...meals];
    let update = initalSate.map((Meals) => {
      if (Meals.id === Mid) {
        return {
          ...Meals,
          item: [
            ...Meals.item,
            {
              id: Meals.item.length + 1,
              Food: "",
              Carbs: 0,
              Fats: 0,
              Protien: 0,
            },
          ],
        };
      }
      return Meals;
    });
    setMeals(update);
  }
  function handleRemoveItem(Mid, Uid) {
    let initalSate = [...meals];

    let update = initalSate.map((Meals) => {
      if (Meals.id === Mid) {
        return { ...Meals, item: Meals.item.filter((el) => el.id !== Uid) };
      }
      return Meals;
    });
    setMeals(update);
  }

  // update Items
  function onChangeHandle(field, value, Mid, Iid) {
    console.log(field, value);
    let initalSate = [...meals];
    let update = initalSate.map((Meals) => {
      if (Meals.id === Mid) {
        return {
          ...Meals,
          item: Meals.item.map((el) =>
            el.id === Iid ? { ...el, [field]: value } : el
          ),
        };
      }
      return Meals;
    });
    setMeals(update);
  }

  return (
    <div
      className={` bg-cyan-700 rounded-xl p-4 ${
        navInput === 3 || navInput === 4 ? ` w-[90%]` : ` w-[30%]`
      }  m-auto `}
    >
      <form onSubmit={onNextHandle}>
        {navInput === 1 && (
          <div>
            {name.map((el) => {
              return (
                <div className=" bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-4">
                  <div className="flex-col ">
                    <p className={inputBannerClass}>Enter Your Full Name</p>
                    <input
                      value={el.UserName}
                      required
                      minLength={3}
                      className={inputClass}
                      placeholder="Full Name"
                      type="text"
                      onChange={(e) => setName(e)}
                    />
                  </div>
                  <div className="flex-col mb-4">
                    <p className={inputBannerClass}>
                      Total No Of Meals You Have ?
                    </p>
                    <input
                      value={el.mealNo}
                      required
                      className={inputClass}
                      placeholder="Meals ?"
                      type="number"
                      onChange={(e) => setNoMeal(e)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {navInput === 2 && (
          <div className="bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-3 ">
            {meals.map((el) => {
              return (
                <div>
                  <div className="flex-col">
                    <p className={inputBannerClass}>Enter Your Meal Names </p>
                    <input
                      value={el.mealName}
                      className={inputClass}
                      required
                      minLength={3}
                      placeholder={`meal no ${el.id}`}
                      type="text"
                      onChange={(e) => MealName(e, el.id)}
                    />
                  </div>
                  <div className="flex-col">
                    <p className={inputBannerClass}>Enter Your Meal Timing </p>
                    <input
                      value={el.time}
                      className={inputClass}
                      required
                      type="time"
                      onChange={(e) => MealTime(e, el.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {navInput === 3 && (
          <div className=" w-full">
            {meals.map((Meals) => {
              return (
                <div
                  className="bg-cyan-200  m-auto p-7 rounded-3xl mb-3"
                  key={Meals.id}
                >
                  <div className="flex justify-center mb-5">
                    <h1 className="text-cyan-700 font-semibold text-xl mx-3">
                      {Meals.mealName}
                    </h1>
                    <h1 className="text-cyan-700  font-semibold text-xl mx-3">
                      Time:- {Meals.time}
                    </h1>
                  </div>
                  {Meals.item.map((Item) => {
                    return (
                      <div key={Item.id} className="flex-col ">
                        <div>
                          <div className="flex justify-around w-[20%] m-auto mt-3">
                            <p className="text-cyan-700 font-semibold">
                              Food Item :-
                            </p>
                            <input
                              value={Item.Food === 0 ? `` : Item.Food}
                              onChange={(e) =>
                                onChangeHandle(
                                  "Food",
                                  e.target.value,
                                  Meals.id,
                                  Item.id
                                )
                              }
                              placeholder="Food "
                              className={inputClass}
                              required
                              type="text"
                            />
                          </div>
                          <div className="flex justify-around w-[25%] m-auto p-3">
                            <button
                              onClick={() => handleAddItem(Meals.id, Item.id)}
                              className={buttonClass}
                            >
                              Add Item
                            </button>
                            <button
                              onClick={() =>
                                handleRemoveItem(Meals.id, Item.id)
                              }
                              className={buttonClass}
                            >
                              Remove Item
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-around w-[50%] m-auto p-3">
                          <p className="text-cyan-700 font-semibold">
                            {" "}
                            Macros in Gms
                          </p>
                          <input
                            value={Item.Protien === 0 ? "" : Item.Protien}
                            placeholder="Protien"
                            onChange={(e) =>
                              onChangeHandle(
                                "Protien",
                                e.target.value,
                                Meals.id,
                                Item.id
                              )
                            }
                            className={inputClass}
                            required
                            type="number"
                          />
                          <input
                            value={Item.Carbs === 0 ? "" : Item.Carbs}
                            placeholder="Carbs"
                            onChange={(e) =>
                              onChangeHandle(
                                "Carbs",
                                e.target.value,
                                Meals.id,
                                Item.id
                              )
                            }
                            className={inputClass}
                            required
                            type="number"
                          />
                          <input
                            value={Item.Fats === 0 ? "" : Item.Fats}
                            placeholder="Fats"
                            onChange={(e) =>
                              onChangeHandle(
                                "Fats",
                                e.target.value,
                                Meals.id,
                                Item.id
                              )
                            }
                            className={inputClass}
                            required
                            type="number"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {navInput === 4 && (
          <div className="w-full">
            <DisplayDiet meal={meals} name={name} />
          </div>
        )}
        <div className="w-[50%] flex justify-around m-auto">
          <button
            type="button"
            className={buttonClass}
            onClick={onPrevHandle}
            disabled={navInput === 1}
          >
            Prev
          </button>
          <button
            disabled={navInput === 4}
            type="submit"
            className={buttonClass}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
