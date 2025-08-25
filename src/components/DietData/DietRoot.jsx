import React, { useState } from "react";
import DietInput from "./DietInput";
import DisplayDiet from "./DisplayDiet";

const DietRoot = () => {
  let [data, setData] = useState([
    {
      mealName: ``,
      Food: ``,
      Carbs: 0,
      Fats: 0,
      Protien: 0,
    },
  ]);
  let [display, setDisplay] = useState(false);
  let [meals, setMeals] = useState([
    {
      mealName: "Breakfast",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Brunch",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Lunch",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Snack",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "PreWorkout",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "Dinner",
      status: true,
      item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
  ]);

  let [noOfMeals, setNoOfMeals] = useState(1);

  function toggle(event) {
    event.preventDefault();
    setDisplay(!display);
    console.log(display);
  }
  return (
    <div className="text-center p-9">
      <header className="text-4xl text-cyan-600 font-semibold">
        Your Daily Food
      </header>
      <div className="m-5 p-5">
        <h1 className="text-2xl text-cyan-300">Enter your Meals </h1>
      </div>
      <div>
        <form action="">
          <div className="border p-4 m-2 rounded-md">
            {toggle === true ? (
              <DisplayDiet meal={meals} />
            ) : (
              <DietInput meals={meals} data={data} setMeals={setMeals} />
            )}
          </div>
          <button onClick={toggle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DietRoot;
