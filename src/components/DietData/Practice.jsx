import { useState } from "react";

const Practice = () => {
  let [meals, setMeals] = useState([
    {
      mealName: "Breakfast",
      status: true,
      item: [{ id: 9, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 30 }],
    },
    {
      mealName: "Brunch",
      status: true,
      item: [
        { id: 1, Food: "EGG", time: 1, Carbs: 20, Fats: 27, Protien: 50 },
        { id: 7, Food: "CHICKEN", time: 3, Carbs: 50, Fats: 10, Protien: 20 },
        { id: 3, Food: "RICE", time: 5, Carbs: 80, Fats: 3, Protien: 30 },
      ],
    },
    {
      mealName: "Lunch",
      status: true,
      item: [{ id: 7, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
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
      item: [{ id: 6, Food: "", time: 0, Carbs: 0, Fats: 0, Protien: 0 }],
    },
  ]);

  const total = [
    {
      mealName: "Breakfast",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
    {
      mealName: "Brunch",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
    {
      mealName: "Lunch",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
    {
      mealName: "Snack",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
    {
      mealName: "PreWorkout",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
    {
      mealName: "Dinner",
      Carbs: 0,
      Fats: 0,
      Protien: 0,
      Calories: 0,
    },
  ];

  function addItem(meal) {
    let initalStae = [...meals];

    console.log(meal);
    let Updated = initalStae.map((Meals) => {
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
    setMeals(Updated);
  }

  function removeItem(meal, SelectedId) {
    let initalState = [...meals];
    console.log(meal);
    let update = initalState.map((Meals) => {
      if (Meals.mealName === meal) {
        return {
          ...Meals,
          item: [Meals.item.filter((el) => el.id != SelectedId)],
        };
      }
      return Meals;
    });
    setMeals(update);
  }

  function getTotals(items) {
    return items.reduce(
      (total, item) => {
        total.Carbs += item.Carbs;
        total.Fats += item.Fats;
        total.Protien += item.Protien;
        return total;
      },
      { Carbs: 0, Fats: 0, Protien: 0 }
    );
  }

  return (
    <div>
      <div>
        <h2>Meals & Totals</h2>
        {meals.map((meal, index) => {
          const totals = getTotals(meal.item);
          return (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <h3>{meal.mealName}</h3>
              <p>Carbs: {totals.Carbs} g</p>
              <p>Fats: {totals.Fats}g</p>
              <p>Protein: {totals.Protien}g</p>
            </div>
          );
        })}
      </div>

      {/* <div>
        {meals.map((meal) => {
          return (
            <div>
              <h1>{meal.mealName}</h1>
              <div>
                {meal.item.map((items, id) => {
                  return (
                    <div>
                      <input placeholder={items.id} type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <div>
                        <button onClick={() => addItem(meal.mealName)}>
                          Add Item
                        </button>
                        <button
                          onClick={() => removeItem(meal.mealName, items.id)}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Practice;

// const getTotals = (items) => {
//   return items.reduce(
//     (totals, item) => {
//       totals.Carbs += item.Carbs;
//       totals.Fats += item.Fats;
//       totals.Protien += item.Protien;
//       return totals;
//     },
//     { Carbs: 0, Fats: 0, Protien: 0 }
//   );
// };
