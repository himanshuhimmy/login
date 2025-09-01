import React from "react";
import InputField from "../Reusabel/InputField";
import DButton from "../Reusabel/DButton";

const Step3Data = ({
  meals,
  handleAddItem,
  handleRemoveItem,
  onChangeHandle,
  buttonClass,
}) => {
  return (
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
                      <InputField
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
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex justify-around w-[25%] m-auto p-3">
                      <DButton
                        onClick={() => handleAddItem(Meals.id, Item.id)}
                        className={buttonClass}
                      >
                        Add Item
                      </DButton>
                      <DButton
                        onClick={() => handleRemoveItem(Meals.id, Item.id)}
                        className={buttonClass}
                      >
                        Remove Item
                      </DButton>
                    </div>
                  </div>
                  <div className="flex justify-around w-[50%] m-auto p-3">
                    <p className="text-cyan-700 font-semibold">Macros in Gms</p>
                    <InputField
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
                      required
                      type="number"
                    />
                    <InputField
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
                      required
                      type="number"
                    />
                    <InputField
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
  );
};

export default Step3Data;
