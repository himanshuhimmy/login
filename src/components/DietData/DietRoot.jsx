import { useState } from "react";
import DietInput from "./DietInput";
import DisplayDiet from "./DisplayDiet";
import UserInput from "./UserInput";

const DietRoot = () => {
  let [display, setDisplay] = useState(false);
  // let [meals, setMeals] = useState([
  //   {
  //     mealName: "Breakfast",
  //     time: 0,
  //     status: true,
  //     item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  //   },
  //   {
  //     mealName: "Brunch",
  //     time: 0,
  //     status: true,
  //     item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  //   },
  //   {
  //     mealName: "Lunch",
  //     time: 0,
  //     status: true,
  //     item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  //   },
  //   {
  //     mealName: "Snack",
  //     time: 0,
  //     status: true,
  //     item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  //   },
  //   {
  //     mealName: "PreWorkout",
  //     time: 0,
  //     status: true,
  //     item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  //   },
  // {
  //   mealName: "Dinner",
  //   time: 0,
  //   status: true,
  //   item: [{ id: 1, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
  // },
  // ]);

  let [name, setName] = useState([{ UserName: ``, mealNo: 0 }]);

  let [userMeals, setUserMeals] = useState([
    {
      mealName: "",
      time: 0,
      id: 1,
      status: true,
      item: [{ id: 1, Food: "", Carbs: 0, Fats: 0, Protien: 0 }],
    },
    {
      mealName: "",
      time: 0,
      id: 1,
      status: true,
      item: [{ id: 1, Food: "", Carbs: 0, Fats: 0, Protien: 0 }],
    },
  ]);

  function toggle() {
    setDisplay(!display);
  }

  return (
    <div className="text-center p-9">
      <header className="text-4xl text-cyan-600 font-semibold">
        Your Daily Food
      </header>
      <div className="m-5 p-5">
        <div className="bg-cyan-700 rounded-xl p-4">
          <div className="p-4">
            <UserInput
              name={name}
              SetName={setName}
              meals={userMeals}
              setMeals={setUserMeals}
              toggle={toggle}
            />
          </div>
        </div>
        {/* <h1 className="text-2xl text-cyan-700 font-semibold">
          {display ? `Your Meals ` : ` Enter your Meals `}
        </h1> */}
      </div>

      {/* <div className="border p-4 m-2 rounded-md">
        {display ? (
          <DisplayDiet meal={meals} toggle={toggle} />
        ) : (
          <DietInput meals={meals} toggle={toggle} setMeals={setMeals} />
        )}
      </div> */}
    </div>
  );
};

export default DietRoot;
