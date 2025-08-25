import React, { useState } from "react";
import DietInput from "./DietInput";
import DisplayDiet from "./DisplayDiet";

const DietRoot = () => {
  let [display, setDisplay] = useState(false);
  let [meals, setMeals] = useState([
    {
      mealName: "Breakfast",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Brunch",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Lunch",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Snack",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "PreWorkout",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Dinner",
      time: 0,
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
  ]);

  function toggle() {
    // setDisplay(!display);
    console.log(display);
  }
  return (
    <div className="text-center p-9">
      <header className="text-4xl text-cyan-600 font-semibold">
        Your Daily Food
      </header>
      <div className="m-5 p-5">
        <h1 className="text-2xl text-cyan-700 font-semibold">
          {display ? `Your Meals ` : ` Enter your Meals `}
        </h1>
      </div>

      <div className="border p-4 m-2 rounded-md">
        {display ? (
          <DisplayDiet meal={meals} toggle={toggle} />
        ) : (
          <DietInput meals={meals} toggle={toggle} setMeals={setMeals} />
        )}
      </div>
    </div>
  );
};

export default DietRoot;
