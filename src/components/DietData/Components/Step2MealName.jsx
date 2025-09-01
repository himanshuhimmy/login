import React from "react";

const Step2MealName = ({
  meals,
  inputBannerClass,
  inputClass,
  UpdateTimeMealName,
}) => {
  return (
    <div className="bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-3 ">
      {meals.map((el) => {
        return (
          <div>
            <div className="flex-col">
              <p className={inputBannerClass}>Enter Your Meal Names </p>
              <input
                value={el.mealName === 0 ? `` : el.mealName}
                className={inputClass}
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
              <input
                value={el.time}
                className={inputClass}
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
