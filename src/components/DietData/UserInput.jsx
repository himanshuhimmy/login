import { useState } from "react";
import DisplayDiet from "./DisplayDiet";
import Step1User from "./Components/Step1User";
import Step2MealName from "./Components/Step2MealName";
import Step3Data from "./Components/Step3Data";
import DButton from "./Reusabel/DButton";

const UserInput = ({ meals, setMeals, name, SetName }) => {
  let inputBannerClass = " p-3 text-cyan-700 font-semibold";
  let inputClass = "rounded-lg p-1 mb-2 text-cyan-600";
  let buttonClass =
    "bg-cyan-600 p-4 rounded-xl text-white  hover:bg-cyan-500 transition-all duration-500";

  let [navInput, setNavInput] = useState(1);

  function setName(e) {
    let initialSate = [...name];
    let update = initialSate.map((el) => ({ ...el, UserName: e.target.value }));
    SetName(update);
  }

  // for loop alternate of arrya.from
  // function hello(count) {
  //   let data = [];
  //   for (let i = 1; i <= count; i++) {
  //     console.log(i);
  //     data.push({
  //       mealName: "",
  //       id: i,
  //       time: 0,
  //       status: true,
  //       item: [{ id: 1, Food: "", Carbs: 0, Fats: 0, Protein: 0 }],
  //     });
  //   }
  //   console.log(data);
  //   return data;
  // }
  // hello(6);

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
  function UpdateTimeMealName(Field, value, id) {
    let initalSate = [...meals];
    console.log(Field, value, id);
    let update = initalSate.map((el) =>
      el.id === id ? { ...el, [Field]: value } : el
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
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(navInput / 4) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={onNextHandle}>
        {navInput === 1 && (
          <Step1User
            name={name}
            inputBannerClass={inputBannerClass}
            setName={setName}
            setNoMeal={setNoMeal}
          />
        )}
        {navInput === 2 && (
          <Step2MealName
            inputBannerClass={inputBannerClass}
            meals={meals}
            UpdateTimeMealName={UpdateTimeMealName}
          />
        )}

        {navInput === 3 && (
          <Step3Data
            meals={meals}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            onChangeHandle={onChangeHandle}
            buttonClass={buttonClass}
          />
        )}

        {navInput === 4 && (
          <div className="w-full">
            <DisplayDiet meal={meals} name={name} />
          </div>
        )}
        <div className="w-[50%] flex justify-around m-auto">
          <DButton
            type="button"
            className={buttonClass}
            onClick={onPrevHandle}
            disabled={navInput === 1}
          >
            Prev
          </DButton>
          <DButton
            disabled={navInput === 4}
            type="submit"
            className={buttonClass}
          >
            Next
          </DButton>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
