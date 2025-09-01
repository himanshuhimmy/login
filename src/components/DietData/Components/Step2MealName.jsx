import React from "react";
import InputField from "../Reusabel/InputField";

const Step2MealName = ({ meals, inputBannerClass, UpdateTimeMealName }) => {
  return (
    <div className="bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-3 ">
      {meals.map((el) => {
        return (
          <div>
            <div className="flex-col">
              <p className={inputBannerClass}>Enter Your Meal Names </p>
              <InputField
                value={el.mealName === 0 ? `` : el.mealName}
                required
                minLength={3}
                placeholder={`meal no ${el.id}`}
                type="text"
                onChange={(e) =>
                  UpdateTimeMealName("mealName", e.target.value, el.id)
                }
              />
            </div>
            <div className="flex-col">
              <p className={inputBannerClass}>Enter Your Meal Timing </p>
              <InputField
                value={el.time}
                required
                type="time"
                onChange={(e) =>
                  UpdateTimeMealName("time", e.target.value, el.id)
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Step2MealName;
